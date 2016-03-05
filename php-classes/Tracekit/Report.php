<?php
namespace Tracekit;

class Report extends \ActiveRecord {

    // ActiveRecord configuration
    static public $tableName = 'tracekit_reports';
	static public $singularNoun = 'tracekit report';
	static public $pluralNoun = 'tracekit reports';

    // required for shared-table subclassing support
	static public $rootClass = __CLASS__;
	static public $defaultClass = __CLASS__;
	static public $subClasses = array(__CLASS__);

	static public $fields = [
        'ApplicationName' => [
            'type' => 'string',
            'notnull' => false
        ],
        'ErrorMode' => [
            'type' => 'string',
            'notnull' => false
        ],
        'ErrorName' => [
            'type' => 'string',
            'notnull' => false
        ],
        'ErrorMessage' => [
            'type' => 'string',
            'notnull' => false
        ],
        'ErrorUrl' => [
            'type' => 'string',
            'notnull' => false
        ],
        'UserAgent' => [
            'type' => 'string',
            'notnull' => false
        ]
	];
}
