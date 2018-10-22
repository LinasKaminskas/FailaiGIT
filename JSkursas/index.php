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




                </div>
            </div>
        </div>
    </div>
</div>



<script src="../JSkursas/js/main.js"></script>

<?php include 'footer.php';?>
