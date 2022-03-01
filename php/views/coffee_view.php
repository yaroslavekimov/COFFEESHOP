	
	<div class="goodsPage Page">
		<h1 class="goodsPageTitle Title coffeePageTitle">Товар</h1>
		<div class="goodsPageWrapper Wrapper">
			<?php for ($row_no = 0; $row_no <= $data->num_rows - 1; $row_no++) {
					$data->data_seek($row_no);
					$row = $data->fetch_assoc();
					echo '
			<div class="goodsPageList coffeePageList">
				<div class="goodsPageItem coffeePageItem">
					<div class="goodsPageName coffeePageName">'.$row['product'].'</div>
					<div class="goodsPageButton Button coffeePageButton">Купить</div>
				</div>
				<div class="goodsPageText coffeePageText">'.$row['description'].'</div>
			</div>';
				}
			?>
		
		</div>
	</div>
	