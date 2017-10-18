<?php namespace Controllers;
use ffe\ProcessWire3\DataProviders\PageDataProvider;

abstract class BasePageDataProvider extends PageDataProvider
{
	public function populate(){
        if($this->config->ajax) {
            $post = json_decode(file_get_contents("php://input"), true);
            $process = $this->modules->get("ProcessDynamicForms");
            $process->store($post);
        }
    }
}