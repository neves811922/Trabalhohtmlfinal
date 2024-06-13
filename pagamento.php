<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doacao";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtém os dados do formulário
$numero_cartao = $_POST['card-number'];
$nome_titular = $_POST['card-name'];
$validade_cartao = $_POST['card-expiry'];
$cvv = $_POST['card-cvv'];

// Prepara a declaração SQL para evitar SQL injection
$stmt = $conn->prepare("INSERT INTO pagamentos (numero_cartao, nome_titular, validade_cartao, cvv) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $numero_cartao, $nome_titular, $validade_cartao, $cvv);

// Executa a declaração
if ($stmt->execute()) {
    echo "Pagamento registrado com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

// Fecha a declaração e a conexão
$stmt->close();
$conn->close();
?>
