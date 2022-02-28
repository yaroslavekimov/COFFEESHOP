	
	<div class="goodsPage Page">
		<h1 class="goodsPageTitle Title">Товар</h1>
		<div class="goodsPageWrapper Wrapper">
			<?php for ($row_no = 0; $row_no <= $data->num_rows - 1; $row_no++) {
					$data->data_seek($row_no);
					$row = $data->fetch_assoc();
					echo '
			<div class="goodsPageList">
				<div class="goodsPageItem">
					<div class="goodsPageName">'.$row['product'].'</div>
					<div class="goodsPageButton Button">Купить</div>
				</div>
				<div class="goodsPageText">'.$row['description'].'</div>
			</div>';
				}
			?>
		
		</div>
	</div>
	