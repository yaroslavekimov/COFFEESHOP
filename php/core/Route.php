<?php
class Route
{

	public static function getPathArray() {
	
	$BASE_URL = 'localhost/coffee-shop/';
	
	$pathArray = [];

	$currentPath = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	if (strpos($currentPath, $BASE_URL) >= 0) {
		$tmpPath = substr($currentPath, strlen($BASE_URL));
	} 

	$tmpArray = explode("/", $tmpPath);

	$pathArray = array_values(array_filter($tmpArray, function($element) {
    	return !empty($element);
	}));

	return $pathArray;
}

	static function start()
	{
		$controller_name = 'General';
		$action_name = 'index';
		
		$routes = self::getPathArray();

		if ( !empty($routes[0]) )
		{	
			$controller_name = $routes[0];
		}
		
		if ( !empty($routes[1]) )
		{
			$action_name = $routes[1];
		}

		$model_name = 'Model_'.$controller_name;
		$controller_name = 'Controller_'.$controller_name;
		$action_name = 'action_'.$action_name;

		$model_file = strtolower($model_name).'.php';
		$model_path = "php/models/".$model_file;
		if(file_exists($model_path))
		{
			include "php/models/".$model_file;
		}

		$controller_file = strtolower($controller_name).'.php';
		$controller_path = "php/controllers/".$controller_file;
		if(file_exists($controller_path))
		{
			include "php/controllers/".$controller_file;
		}
		else
		{
			Route::ErrorPage404();
		}
		
		$controller = new $controller_name;
		$action = $action_name;
		
		if(method_exists($controller, $action))
		{
			$controller->$action();
		}
		else
		{
			Route::ErrorPage404();
		}
	
	}
	
	static function ErrorPage404()
	{
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/coffee-shop/';
        header('HTTP/1.1 404 Not Found');
		header("Status: 404 Not Found");
		header('Location:'.$host.'404');
    }
}

?>