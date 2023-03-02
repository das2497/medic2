<?php

require 'connection.php';
?>

<div class="col-12 col-lg-2 offset-lg-2 input-group w-50">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
        </div>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
    </div>
</div>
<?php
$rsub2 = Database::search("SELECT * FROM specialies;");
?>
<div class="col-12 col-lg-3  ">
    <select class="form-select" id="dchnlspecility" onchange="d_ch_slct();">
        <option value="x">Select Speciality</option>
        <?php
        $rsub2 = Database::search("SELECT * FROM specialies;");
        while ($row2 = mysqli_fetch_assoc($rsub2)) {
        ?>
            <option value="<?php echo $row2["id"]; ?>"><?php echo $row2["speciality"]; ?></option>
        <?php
        }
        ?>
    </select>
</div>

<div class="col-12 overflow-scroll " id="docchnl">

    <table class=" table table-responsive table-striped shadow table-hover mt-4">
        <thead>
            <tr>
                <th scope="col">Doctor's Name</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <?php

            $rs1 = Database::search("SELECT doctor.id, doctor.uname, doctor.name, doctor.specialty, specialies.speciality, doctor.password FROM doctor INNER JOIN specialies ON doctor.specialty=specialies.id;");
            $sn = $rs1->num_rows;

            for ($i = 0; $i < $sn; $i++) {
                $sd = $rs1->fetch_assoc();

            ?>
                <tr class="alert-info">
                    <td><?php echo $sd["name"]; ?></td>
                    <td><button onclick="doctorDetails('<?php echo $sd['id']; ?>');" class="btn btn-outline-primary fw-bold">View Channelings</button></td>
                </tr>

            <?php

            }

            ?>

        </tbody>
    </table>
</div>