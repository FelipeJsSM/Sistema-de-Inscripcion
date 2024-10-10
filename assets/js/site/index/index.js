$(document).ready(function () {
    let valueName = "";
    let valueProvince = "";
    let valueCity = "";
    let valueSector = "";
    let valueStreet = "";
    let valueCareer = "";

    let selectedSubjects = [];

    $("#content-container").on("click", "#btn-Save", function () {
        createSecondForm();
    });

    $("#content-container").on("click", "#btnBackSecondForm", function () {
        secondForm();
    });

    $("#content-container").on("click", "#btn-Reset", function () {
        resetFirstForm();
    });

    $("#content-container").on("click", "#btn-Back", function () {
        firstForm();
    });

    $("#content-container").on("click", "#btnSaveInformation", function () {
        end();
    });

    $("#content-container").on("click", "#btnSaveSchedule", function () {
        gatherSelections();
    });

    function gatherSelections(){
        selectedSubjects = [];

        if (valueCareer == "software") {
            addSelectedSubject("softwareSubject1", "Fundamentos de Programación");
            addSelectedSubject("softwareSubject2", "Programación I");
            addSelectedSubject("softwareSubject3", "Programación II");
            addSelectedSubject("softwareSubject4", "Programación III");
            addSelectedSubject("softwareSubject5", "Programación Paralela");
        } else if (valueCareer == "sound") {
            addSelectedSubject("soundSubject1", "Teoría Musical I");
            addSelectedSubject("soundSubject2", "Teoría Musical II");
            addSelectedSubject("soundSubject3", "Mesa de Mezcla I");
            addSelectedSubject("soundSubject4", "Mesa de Mezcla II");
            addSelectedSubject("soundSubject5", "Sonido en Vivo");
        } else if (valueCareer == "mechatronics") {
            addSelectedSubject("mechatronicsSubject1", "Circuitos Eléctricos I");
            addSelectedSubject("mechatronicsSubject2", "Circuitos Eléctricos II");
            addSelectedSubject("mechatronicsSubject3", "Controles Automáticos I");
            addSelectedSubject("mechatronicsSubject4", "Controles Automáticos II");
            addSelectedSubject("mechatronicsSubject5", "Robótica");
        }

        lastForm();
    }

    function addSelectedSubject(subjectName, subjectTitle) {
        if ($(`input[name="${subjectName}"]:checked`).length) {
            selectedSubjects.push({
                subject: subjectTitle,
                schedule: $(`input[name="${subjectName}"]:checked`).val()
            });
        }
    }

    function secondForm(){
        switch(valueCareer){
            case "software":
                scheduleSoftware();
                break;
            case "mechatronics":
                scheduleMechatronics();
                break;
            case "sound":
                scheduleSound();
                break;
        }
    }

    function createSecondForm(){
        if (validateFirtsForm()){
            secondForm();
        } else {
            toastr.error("Debe completar todos los campos", "Ha ocurrido un error", {
                TimeOut: 2000,
            });
        }
    }

    function validateFirtsForm(){
        let isValid = true;

        valueName = $("#userNm").val();
        valueProvince = $("#userPrvnc").val();
        valueCity = $("#userCty").val();
        valueSector = $("#userSct").val();
        valueStreet = $("#userStrt").val();
        valueCareer = $("#userCrr").val();

        if (valueName == "" || valueName == undefined || valueName == null) {
            isValid = false;
            $("#userNm").removeClass("input-success");
            $("#userNm").addClass("input-error");
        } else {
            $("#userNm").removeClass("input-error");
            $("#userNm").addClass("input-success");
        }

        if (valueProvince == "" || valueProvince == undefined || valueProvince == null) {
            isValid = false;
            $("#userPrvnc").removeClass("input-success");
            $("#userPrvnc").addClass("input-error");
        } else {
            $("#userPrvnc").removeClass("input-error");
            $("#userPrvnc").addClass("input-success");
        }

        if (valueCity == "" || valueCity == undefined || valueCity == null) {
            isValid = false;
            $("#userCty").removeClass("input-success");
            $("#userCty").addClass("input-error");
        } else {
            $("#userCty").removeClass("input-error");
            $("#userCty").addClass("input-success");
        }

        if (valueSector == "" || valueSector == undefined || valueSector == null) {
            isValid = false;
            $("#userSct").removeClass("input-success");
            $("#userSct").addClass("input-error");
        } else {
            $("#userSct").removeClass("input-error");
            $("#userSct").addClass("input-success");
        }

        if (valueStreet == "" || valueSector == undefined || valueSector == null) {
            isValid = false;
            $("#userStrt").removeClass("input-success");
            $("#userStrt").addClass("input-error");
        } else {
            $("#userStrt").removeClass("input-error");
            $("#userStrt").addClass("input-success");
        }

        if (valueCareer == "" || valueCareer == undefined || valueCareer == null) {
            isValid = false;
            $("#userCrr").removeClass("input-success");
            $("#userCrr").addClass("input-error");
        } else {
            $("#userCrr").removeClass("input-error");
            $("#userCrr").addClass("input-success");
        }

        return isValid;
    }

    function resetFirstForm(){
        valueName = "";
        valueProvince = "";
        valueCity = "";
        valueSector = "";
        valueStreet = "";
        valueCareer = "";

        $("#userNm").val("").removeClass("input-success").removeClass("input-error").focus();
        $("#userPrvnc").val("").removeClass("input-success").removeClass("input-error");
        $("#userCty").val("").removeClass("input-success").removeClass("input-error");
        $("#userSct").val("").removeClass("input-success").removeClass("input-error");
        $("#userStrt").val("").removeClass("input-success").removeClass("input-error");
        $("#userCrr").val("").removeClass("input-success").removeClass("input-error");
    }

    function scheduleSoftware(){
        const htmlScheduleSoftware = `<div class="mt-5 col-5">
                <div class="card rounded-0">
                    <div class="card-header text-bg-primary rounded-0">
                        <h2>Seleccion de Materia</h2>
                    </div>
                    <div class="card-body" id="scheduleContainer">
                        <div id="subject1">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Fundamentos de Programación</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject1"
                                            id="morningScheduleSb1" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb1">Mo 8:00 - 13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject1"
                                            id="eveningScheduleSb1" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb1">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject1"
                                            id="nightScheduleSb1" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb1">We 17:00 - 22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject2" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Programación I</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject2"
                                            id="morningScheduleSb2" value="Th 8:00 - 12:00" />
                                        <label class="form-check-label" for="morningScheduleSb2">Th 8:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject2"
                                            id="eveningScheduleSb2" value="Fr 12:00 - 16:00" />
                                        <label class="form-check-label" for="eveningScheduleSb2">Fr 12:00 -
                                            16:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject2"
                                            id="nightScheduleSb2" value="Sa 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb2">Sa 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject3" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Programación II</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject3"
                                            id="morningScheduleSb3" value="Mo 8:00 - 11:00" />
                                        <label class="form-check-label" for="morningScheduleSb3">Mo 8:00 -
                                            11:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject3"
                                            id="eveningScheduleSb3" value="We 11:00 - 14:00" />
                                        <label class="form-check-label" for="eveningScheduleSb3">We 11:00 -
                                            14:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject3"
                                            id="nightScheduleSb3" value="Fr 14:00 - 17:00" />
                                        <label class="form-check-label" for="nightScheduleSb3">Fr 14:00 -
                                            17:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject4" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Programación III</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject4"
                                            id="morningScheduleSb4" value="Tu 8:00 - 10:00" />
                                        <label class="form-check-label" for="morningScheduleSb4">Tu 8:00 -
                                            10:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject4"
                                            id="eveningScheduleSb4" value="Th 10:00 - 12:00" />
                                        <label class="form-check-label" for="eveningScheduleSb4">Th 10:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject4"
                                            id="nightScheduleSb4" value="Sa 12:00 - 14:00" />
                                        <label class="form-check-label" for="nightScheduleSb4">Sa 12:00 -
                                            14:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject5" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Programación Paralela</h5>


                                    <hr class="border border-primary">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject5"
                                            id="morningScheduleSb5" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb5">Mo 8:00 -
                                            13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject5"
                                            id="eveningScheduleSb5" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb5">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="softwareSubject5"
                                            id="nightScheduleSb5" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb5">We 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <button class="btn btn-primary float-end" id="btnSaveSchedule">
                                Aceptar
                            </button>

                            <button class="btn btn-warning float-end me-2" id="btn-Back">
                                Volver
                            </button>
                        </div>

                    </div>
                </div>
            </div>`;
        $("#content-container").html(htmlScheduleSoftware);
    }

    function scheduleMechatronics(){
        const htmlScheduleMechatronics = `<div class="mt-5 col-5">
                <div class="card rounded-0">
                    <div class="card-header text-bg-primary rounded-0">
                        <h2>Seleccion de Materia</h2>
                    </div>
                    <div class="card-body" id="scheduleContainer">
                        <div id="subject1">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Circuitos Electricos I</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject1"
                                            id="morningScheduleSb1" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb1">Mo 8:00 - 13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject1"
                                            id="eveningScheduleSb1" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb1">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject1"
                                            id="nightScheduleSb1" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb1">We 17:00 - 22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject2" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Circuitos Electricos II</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject2"
                                            id="morningScheduleSb2" value="Th 8:00 - 12:00" />
                                        <label class="form-check-label" for="morningScheduleSb2">Th 8:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject2"
                                            id="eveningScheduleSb2" value="Fr 12:00 - 16:00" />
                                        <label class="form-check-label" for="eveningScheduleSb2">Fr 12:00 -
                                            16:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject2"
                                            id="nightScheduleSb2" value="Sa 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb2">Sa 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject3" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Controles Automáticos I</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject3"
                                            id="morningScheduleSb3" value="Mo 8:00 - 11:00" />
                                        <label class="form-check-label" for="morningScheduleSb3">Mo 8:00 -
                                            11:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject3"
                                            id="eveningScheduleSb3" value="We 11:00 - 14:00" />
                                        <label class="form-check-label" for="eveningScheduleSb3">We 11:00 -
                                            14:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject3"
                                            id="nightScheduleSb3" value="Fr 14:00 - 17:00" />
                                        <label class="form-check-label" for="nightScheduleSb3">Fr 14:00 -
                                            17:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject4" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Controles Automáticos II</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject4"
                                            id="morningScheduleSb4" value="Tu 8:00 - 10:00" />
                                        <label class="form-check-label" for="morningScheduleSb4">Tu 8:00 -
                                            10:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject4"
                                            id="eveningScheduleSb4" value="Th 10:00 - 12:00" />
                                        <label class="form-check-label" for="eveningScheduleSb4">Th 10:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject4"
                                            id="nightScheduleSb4" value="Sa 12:00 - 14:00" />
                                        <label class="form-check-label" for="nightScheduleSb4">Sa 12:00 -
                                            14:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject5" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Robótica</h5>


                                    <hr class="border border-primary">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject5"
                                            id="morningScheduleSb5" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb5">Mo 8:00 -
                                            13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject5"
                                            id="eveningScheduleSb5" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb5">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="mechatronicsSubject5"
                                            id="nightScheduleSb5" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb5">We 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <button class="btn btn-primary float-end" id="btnSaveSchedule">
                                Aceptar
                            </button>

                            <button class="btn btn-warning float-end me-2" id="btn-Back">
                                Volver
                            </button>
                        </div>

                    </div>
                </div>
            </div>`;

            $("#content-container").html(htmlScheduleMechatronics);
    }

    function scheduleSound(){
        const htmlScheduleSound = `<div class="mt-5 col-5">
                <div class="card rounded-0">
                    <div class="card-header text-bg-primary rounded-0">
                        <h2>Seleccion de Materia</h2>
                    </div>
                    <div class="card-body" id="scheduleContainer">
                        <div id="subject1">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Teoría Musical I</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject1"
                                            id="morningScheduleSb1" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb1">Mo 8:00 - 13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject1"
                                            id="eveningScheduleSb1" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb1">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject1"
                                            id="nightScheduleSb1" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb1">We 17:00 - 22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject2" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Teoría Musical II</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject2"
                                            id="morningScheduleSb2" value="Th 8:00 - 12:00" />
                                        <label class="form-check-label" for="morningScheduleSb2">Th 8:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject2"
                                            id="eveningScheduleSb2" value="Fr 12:00 - 16:00" />
                                        <label class="form-check-label" for="eveningScheduleSb2">Fr 12:00 -
                                            16:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject2"
                                            id="nightScheduleSb2" value="Sa 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb2">Sa 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject3" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Mesa de Mezcla I</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject3"
                                            id="morningScheduleSb3" value="Mo 8:00 - 11:00" />
                                        <label class="form-check-label" for="morningScheduleSb3">Mo 8:00 -
                                            11:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject3"
                                            id="eveningScheduleSb3" value="We 11:00 - 14:00" />
                                        <label class="form-check-label" for="eveningScheduleSb3">We 11:00 -
                                            14:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject3"
                                            id="nightScheduleSb3" value="Fr 14:00 - 17:00" />
                                        <label class="form-check-label" for="nightScheduleSb3">Fr 14:00 -
                                            17:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject4" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Mesa de Mezcla II</h5>

                                    <hr class="border border-primary">

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject4"
                                            id="morningScheduleSb4" value="Tu 8:00 - 10:00" />
                                        <label class="form-check-label" for="morningScheduleSb4">Tu 8:00 -
                                            10:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject4"
                                            id="eveningScheduleSb4" value="Th 10:00 - 12:00" />
                                        <label class="form-check-label" for="eveningScheduleSb4">Th 10:00 -
                                            12:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject4"
                                            id="nightScheduleSb4" value="Sa 12:00 - 14:00" />
                                        <label class="form-check-label" for="nightScheduleSb4">Sa 12:00 -
                                            14:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="subject5" class="mt-3">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <h5 class="card-title">Sonido en Vivo</h5>


                                    <hr class="border border-primary">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject5"
                                            id="morningScheduleSb5" value="Mo 8:00 - 13:00" />
                                        <label class="form-check-label" for="morningScheduleSb5">Mo 8:00 -
                                            13:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject5"
                                            id="eveningScheduleSb5" value="Tu 13:00 - 18:00" />
                                        <label class="form-check-label" for="eveningScheduleSb5">Tu 13:00 -
                                            18:00</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="soundSubject5"
                                            id="nightScheduleSb5" value="We 17:00 - 22:00" />
                                        <label class="form-check-label" for="nightScheduleSb5">We 17:00 -
                                            22:00</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <button class="btn btn-primary float-end" id="btnSaveSchedule">
                                Aceptar
                            </button>

                            <button class="btn btn-warning float-end me-2" id="btn-Back">
                                Volver
                            </button>
                        </div>

                    </div>
                </div>
            </div>`;

            $("#content-container").html(htmlScheduleSound);
    }

    function firstForm(){
        const htmlFirst = `<div class="mt-5 col-5">
                <div class="card rounded-0">
                    <div class="card-header text-bg-dark rounded-0">
                        <h2>Datos Personales</h2>
                    </div>
                    <div class="card-body">
                        <div id="nmUser">
                            <label for="userNm" class="form-label">Nombre:</label>
                            <input type="text" class="form-control form-control-sm" id="userNm" />
                        </div>

                        <div id="prvncUser" class="mt-3">
                            <label for="userPrvnc" class="form-label">Provincia:</label>
                            <input type="text" class="form-control form-control-sm" id="userPrvnc" />
                        </div>

                        <div id="ctyUser" class="mt-3">
                            <label for="userCty" class="form-label">Ciudad:</label>
                            <input type="text" class="form-control form-control-sm" id="userCty" />
                        </div>

                        <div id="sctUser" class="mt-3">
                            <label for="userSct" class="form-label">Sector:</label>
                            <input type="text" class="form-control form-control-sm" id="userSct" />
                        </div>

                        <div id="strtUser" class="mt-3">
                            <label for="userStrt" class="form-label">Calle:</label>
                            <input type="text" class="form-control form-control-sm" id="userStrt" />
                        </div>

                        <div id="crrUser" class="mt-3">
                            <label for="userCrr" class="form-label">Carrera:</label>
                            <select class="skillScore form-select" id="userCrr">
                                <option value="">Selecciona una opción</option>
                                <option value="software">Software</option>
                                <option value="mechatronics">Mecatrónica</option>
                                <option value="sound">Sonido</option>
                            </select>
                        </div>

                        <div class="mt-3">
                            <button class="btn btn-primary float-end" id="btn-Save">
                                Registrar
                            </button>

                            <button class="btn btn-warning float-end me-2" id="btn-Reset">
                                Limpiar
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
        
            $("#content-container").html(htmlFirst);
            $("#userNm").val(valueName);
            $("#userPrvnc").val(valueProvince);
            $("#userCty").val(valueCity);
            $("#userSct").val(valueSector);
            $("#userStrt").val(valueStreet);
            $("#userCrr").val(valueCareer);
    }

    function lastForm(){
        let htmlLast = `<div class="mt-5 col-5">
                <div class="card rounded-0">
                    <div class="card-header text-bg-success rounded-0">
                        <h2>Confirmación</h2>
                    </div>
                    <div class="card-body">
                        <div class="card" id="containerConfirmation">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list-group-item-action active">Datos Basicos</li>
                                <li class="list-group-item" id="liNameUser"></li>
                                <li class="list-group-item" id="liProvinceUser"></li>
                                <li class="list-group-item" id="liCityUser"></li>
                                <li class="list-group-item" id="liSectorUser"></li>
                                <li class="list-group-item" id="liStreetUser"></li>
                                <li class="list-group-item" id="liCareerUser"></li>
                            </ul>
                        </div>
                        <div id="tableConfirmation" class="table-responsive mt-3">
                            <table class="table table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Asignatura</th>
                                        <th scope="col">Mo</th>
                                        <th scope="col">Tu</th>
                                        <th scope="col">We</th>
                                        <th scope="col">Th</th>
                                        <th scope="col">Fr</th>
                                        <th scope="col">Sa</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">`;
                                selectedSubjects.forEach(sub => {
                                    const days = { Mo: "", Tu: "", We: "", Th: "", Fr: "", Sa: "" };
                            
                                    const [day, startTime, dash, endTime] = sub.schedule.split(" ");
                            
                                    days[day] = `${startTime} - ${endTime}`;
                            
                                    htmlLast += `<tr>
                                        <td>${sub.subject}</td>
                                        <td>${days.Mo}</td>
                                        <td>${days.Tu}</td>
                                        <td>${days.We}</td>
                                        <td>${days.Th}</td>
                                        <td>${days.Fr}</td>
                                        <td>${days.Sa}</td>
                                    </tr>`;
                                });
                                htmlLast += `</tbody>
                            </table>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-success float-end" id="btnSaveInformation">
                                Finalizar
                            </button>

                            <button class="btn btn-warning float-end me-2" id="btnBackSecondForm">
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;

        $("#content-container").html(htmlLast);
        $("#liNameUser").text(`Nombre: ${valueName}`);
        $("#liProvinceUser").text(`Provincia: ${valueProvince}`);
        $("#liCityUser").text(`Ciudad: ${valueCity}`);
        $("#liSectorUser").text(`Sector: ${valueSector}`);
        $("#liStreetUser").text(`Calle: ${valueStreet}`);

        switch(valueCareer){
            case "software":
                $("#liCareerUser").text("Carrera: Software");
                break;
            case "mechatronics":
                $("#liCareerUser").text("Carrera: Mecatrónica");
                break;
            case "sound":
                $("#liCareerUser").text("Carrera: Sonido");
                break;
        }
    }

    function end(){
        $.confirm({
            title: "Esta seguro de la seleccion actual?",
            content: "",
            buttons: {
                cancel: {
                    text: "Cancelar",
                    btnClass: "btn btn-danger",
                    action: function() {},
                },
                confirm: {
                    text: "Aceptar",
                    btnClass: "btn btn-success",
                    action: function() {
                        valueName = "";
                        valueProvince = "";
                        valueCity = "";
                        valueSector = "";
                        valueStreet = "";
                        valueCareer = "";

                        toastr.success("Seleccionado Correctamente", "Notificacion", {
                            TimeOut: 2000,
                        });
                
                        firstForm();
                    },
                }
            }
        });
    }
});