<?php 

	class Controller_Products extends Controller {

		function __construct()
		{
			$this->model = new Model_Products();
			$this->view = new View();
		}
		
		function action_index()
		{
			$data = $this->model->get_data();
			$this->view->generate('products_view.php', 'template_view.php', $data);
		}

		function action_coffee() {
			$id = $_GET['id'];
			$data = $this->model->get_data($id);
			$this->view->generate('coffee_view.php', 'template_view.php', $data);
		}
	}

?>