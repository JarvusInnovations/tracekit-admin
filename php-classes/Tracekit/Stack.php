<?php
namespace Tracekit;

class Stack extends \ActiveRecord {
    
    // ActiveRecord configuration
    static public $tableName = 'stack'; 
	static public $singularNoun = 'stack'; 
	static public $pluralNoun = 'stacks'; 
	
	// required for shared-table subclassing support
	static public $rootClass = __CLASS__;
	static public $defaultClass = __CLASS__;
	static public $subClasses = array(__CLASS__);

    static public $fields = [
        'ReportID' => [
            'type' => 'int',
            'notnull' => true,
            'unsigned' => true
        ],
        'StackItem' => [
            'type' => 'int',
            'notnull' => true,
            'unsigned' => true
        ],
        'Url' => [
            'type' => 'string',
            'notnull' => false
        ],
        'Line' => [
            'type' => 'string',
            'notnull' => false
        ],
        'ColumnNo' => [
            'type' => 'string',
            'notnull' => false
        ],
        'Func' => [
            'type' => 'string',
            'notnull' => false
        ],
        'Context' => [
            'type' => 'string',
            'notnull' => false
        ]       
	];

}