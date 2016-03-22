<?php

namespace Tracekit;

class ReportRequestHandler extends \RecordsRequestHandler
{
    public static $recordClass = Report::class;
    public static $accountLevelBrowse = 'Developer';
    public static $accountLevelRead = 'Developer';
    public static $accountLevelWrite =  false;
    public static $browseOrder = ['Created' => 'DESC'];
    public static $responseMode = 'json';
    
    public static function handleRecordsRequest($action = false)
    {
        if (static::shiftPath() == 'catch') {
            return static::handleCreateRequest();
        } 
        return parent::handleRecordsRequest();
    }

    protected static function onRecordCreated(\ActiveRecord $report, $data) {
        $report->UserAgent = $_SERVER['HTTP_USER_AGENT'];
    }
    
    protected static function onRecordSaved(\ActiveRecord $report, $data)
    {
        $stacks = json_decode($data['Stacks']);
        
        foreach ($stacks as $key => $line) {
        
            $stack = new Stack();
            
            $stack->ReportID = $report->ID;
            $stack->StackItem = $key;
            
            $stack->Url = $line->url;
            $stack->Line = $line->line;
            $stack->ColumnNo = $line->column;
            $stack->Func = $line->func;
            $stack->Context = implode("\n",$line->context);
            
            $stack->save();
        }        
    }    
}
