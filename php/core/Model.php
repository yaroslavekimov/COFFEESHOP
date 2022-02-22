<?php 
class Model
{

	function __construct() { 
		$this->mysqli = mysqli_connect("localhost", "root", "", "posts");

		if ($this->mysqli === false) {
		    	die("ERROR: Could not connect. " . mysqli_connect_error());
			}
	}

	public function executeQuery($query) {
		$res = $this->mysqli->query($query);
		return $res;
	}

	function __destruct() {
       $this->mysqli->close();
   }
}
?>