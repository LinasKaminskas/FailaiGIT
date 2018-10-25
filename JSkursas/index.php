<?php include 'header.php';?>

<div class="index-pagalbinis">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="index-content-wrapper">

                    <button onclick="pradiniai()">Pradiniai duomenys</button>
                    <button onclick="Rmax()">Rasti max</button>


                    <table>
                    <thead>
                        <tr>
                            <th>Ilgis</th>
                            <th>Plotis</th>
                            <th>Aukstis</th>
                            <th>Turis</th>
                        </tr>
                    </thead>
                        <tbody id="tableData" ></tbody>
                    </table>

                    <p id="demo"></p>




                </div>
            </div>
        </div>
    </div>
</div>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script src="../JSkursas/js/main.js"></script>
<script src="../JSkursas/js/main-1.js"></script>

<?php include 'footer.php';?>
