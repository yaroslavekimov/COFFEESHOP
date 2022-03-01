	
	<div id="coffee" class="productsPage Page">
		<h1 class="productsPageTitle Title coffeePageTitle">Товар</h1>
		<div class="productsPageWrapper Wrapper">
			<?php for ($row_no = 0; $row_no <= $data->num_rows - 1; $row_no++) {
					$data->data_seek($row_no);
					$row = $data->fetch_assoc();
					echo '
			<div class="productsPageList coffeePageList">
				<div class="productsPageItem coffeePageItem">
					<div class="productsPageName coffeePageName">'.$row['product'].'</div>
					<div class="productsPageButton Button coffeePageButton">Купить</div>
				</div>
				<div class="productsPageText coffeePageText">'.$row['description'].'</div>
			</div>';
				}
			?>
		
		</div>
	</div>
	