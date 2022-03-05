	
	<div id="item" class="productsPage Page hideMenuItem">
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
	<div class="modal">
		<span class="modalClose"></span>
		<form id="wdh_form" action="#" class="modalOrder">
			<div class="modalOrderWrapper">
				<label>Введите ваше имя:</label>
				<input id="uname" name="uname" required placeholder="name" type="text">
				<span class="error error__name"></span>
			</div>
			<div class="modalOrderWrapper">
				<label>Введите ваш e-mail:</label>
				<input id="uemail" name="uemail" required placeholder="eeee@mail.ru" type="email">
				<span class="error error__email"></span>
			</div>
			<div class="modalOrderWrapper">
				<button class="modalOrderButton" id="submit">ОТПРАВИТЬ</button>
				<div id="wdh_result_form" class="error"></div>
			</div>
        </form>
	</div>
	