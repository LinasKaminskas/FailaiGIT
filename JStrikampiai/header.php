<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Pavyzdys</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="../JStrikampiai/css/main.css"/>
</head>
<body>
<header>
        <div class="header-pagalbinis">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="header-content-wrapper">

                            <div Id="trikampis"></div>

                            <table id="myTable1">
                                <tr>
                                    <td>Pirmas kamp</td>
                                </tr>
                            </table>

                            <div  id="kspal">Cia Tekstas</div>
                            <button  onclick="mygtukas()">Spalva raudona</button>

                            <p>
                                <label>Fahrenheit</label>
                                <input id="inputFahrenheit" type="number" placeholder="Fahrenheit" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)">
                            </p>
                            <p>Celcius: <span id="outputCelcius"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>
<div class="container">
    <div class="row_copy">
        <div class="1class"></div>
        <div class="2class"></div>
        <div class="3class"></div>
        <div class="row_paste">

            <div id="laipsnis"></div>

        </div>
    </div>
</div>
<script src="../JStrikampiai/js/main.js"></script>
















