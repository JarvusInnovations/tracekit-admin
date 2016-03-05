<?php

namespace Tracekit;

class ReportRequestHandler extends \RecordsRequestHandler
{
    public static $recordClass = Report::class;
    public static $accountLevelBrowse = 'Developer';
    public static $accountLevelRead = 'Developer';
    public static $accountLevelWrite = 'Administrator';
    public static $browseOrder = ['Created' => 'DESC'];
}
