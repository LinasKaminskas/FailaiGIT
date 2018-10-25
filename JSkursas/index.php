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

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt eget nulla quis aliquam.
                        Maecenas vel nunc mauris. Suspendisse ut gravida mauris. Fusce ut dignissim eros.
                    </p>

                    <button  class="siauras">Siauras</button>
                    <button class="platus">Platus</button>

                    <select>
                        <option id="c1" value="red">Red</option>
                        <option id="c2" value="green">Green</option>
                        <option id="c3" value="white">White</option>
                        <option id="c4" value="blue">Blue</option>
                    </select>

                    <input type="checkbox" class="disabledCheckboxes" disabled>Red
                    <input type="checkbox" class="disabledCheckboxes" disabled="disabled">Green
                    <p><input id="button1" type="button" value="Click to enable check boxes"/></p>

                    <button class="redred"  onclick="append()">Append</button>
                    <button onclick="after()">After</button>
                    <button onclick="prepend()">Prepend</button>



                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<script src="../JSkursas/js/main.js"></script>
<script src="../JSkursas/js/main-1.js"></script>

<?php include 'footer.php';?>
