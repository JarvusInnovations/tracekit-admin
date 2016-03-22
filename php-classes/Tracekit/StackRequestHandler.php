<?php

namespace Tracekit;

class StackRequestHandler extends \RecordsRequestHandler
{
    public static $recordClass = Stack::class;
    public static $accountLevelBrowse = 'Developer';
    public static $accountLevelRead = 'Developer';
    public static $accountLevelWrite = 'Administrator'; 
}