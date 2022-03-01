	
	<div id="products" class="productsPage Page">
		<h1 class="productsPageTitle Title">Товары</h1>
		<div class="productsPageWrapper Wrapper">
			<?php 
				for ($row_no = 0; $row_no <= $data->num_rows - 1; $row_no++) {
					$data->data_seek($row_no);
					$row = $data->fetch_assoc();
					echo '
			<div class="productsPageList">
					<img src="'.$row['src'].'" alt="coffee-shop" class="productsPageImg">'.
					'<div class="productsPageItem">
						<div class="productsPageName">'.$row['product'].'</div>
						<a href="/coffee-shop/products/coffee/?id='.$row['id'].'">Подробнее</a>
					</div>
				</div>';
				}
			?>
			<div class="control">
				<div class="controlButton">Prev</div>
				<div class="controlButton">Next</div>
			</div>

		</div>
	</div>