<?php 
	class Model_Products extends Model {
		public function get_data($id = -1) {	
			if ($id <> -1) {
				$result = $this->executeQuery("SELECT * FROM products WHERE id = ($id)");
			} else {
				$result = $this->executeQuery("SELECT * FROM products");
			}
			return $result;
		}
	}
?>