<?php 

class Controller_General extends Controller
{

	function __construct()
	{
		$this->model = new Model_General();
		$this->view = new View();
	}
	
	function action_index()
	{
		$data = $this->model->get_data();
		$this->view->generate('general_view.php', 'template_view.php', $data);
	}
}

?>