<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');

$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'apimasjid';

$db = new mysqli($server, $username, $password, $dbname);

if (!$db) {
    die("Couldn't connect to the Database");
}

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';

switch ($method) {
    case 'GET':
        if (isset($_GET['all'])) {
            $donatur = mysqli_query($db, "SELECT * FROM donatur");

            if (mysqli_num_rows($donatur) > 0) {
                $json_array = array();
                while ($row = mysqli_fetch_array($donatur)) {
                    $json_array[] = array(
                        "id" => $row["id"],
                        "nama" => $row["nama"],
                        "paket" => $row["paket"],
                        "kategori" => $row["kategori"],
                        "nominal" => $row["nominal"]
                    );
                }
                echo json_encode($json_array);
            } else {
                echo json_encode([]);
            }
        } else {
            $page = isset($_GET['page']) ? $_GET['page'] : 1;
            $limit = 5; // Jumlah data per halaman
            $offset = ($page - 1) * $limit;

            $searchQuery = isset($_GET['search']) ? $_GET['search'] : '';

            $whereClause = "";
            if (!empty($searchQuery)) {
                $searchQuery = mysqli_real_escape_string($db, $searchQuery);
                $whereClause = "WHERE nama LIKE '%$searchQuery%'";
            }

            $donaturCount = mysqli_query($db, "SELECT COUNT(*) as total FROM donatur $whereClause");
            $donaturCountData = mysqli_fetch_assoc($donaturCount);
            $totalPages = ceil($donaturCountData['total'] / $limit);

            $donatur = mysqli_query($db, "SELECT * FROM donatur $whereClause LIMIT $limit OFFSET $offset");

            if (mysqli_num_rows($donatur) > 0) {
                $json_array = array();
                while ($row = mysqli_fetch_array($donatur)) {
                    $json_array[] = array(
                        "id" => $row["id"],
                        "nama" => $row["nama"],
                        "paket" => $row["paket"],
                        "kategori" => $row["kategori"],
                        "nominal" => $row["nominal"]
                    );
                }
                $response = array(
                    "page" => $page,
                    "total_pages" => $totalPages,
                    "data" => $json_array
                );
                echo json_encode($response);
            } else {
                echo json_encode([]);
            }
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $nama = $data->nama;
        $paket = $data->paket;
        $kategori = $data->kategori;
        $nominal = $data->nominal;

        $stmt = $db->prepare("INSERT INTO donatur (nama, paket, kategori, nominal) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("sssi", $nama, $paket, $kategori, $nominal);

        if ($stmt->execute()) {
            echo json_encode(["success" => "Data Sudah Masuk Jazakallahu Khairan Katsir🥰"]);
        } else {
            echo json_encode(["error" => "Astagfirullah, Isi Ulang Form nya Akhi/Ukhti"]);
        }

        $stmt->close();
        break;
}
