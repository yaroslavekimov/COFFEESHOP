<?php 
	class Model_Goods extends Model {
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