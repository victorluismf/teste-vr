#Irei utilizar o comando $uri_base para acessar a página com o HTTParty.
Quando('eu acesso a url') do
    $uri_base = "https://portal.vr.com.br/api-web/comum/enumerations/VRPAT"
    $response =  HTTParty.get($uri_base)
end

#Farei a verificação da chave 'typeOfEstablishment' e imprimir o estabelecimento.
Então('verifico se JSON retorna e imprimo o estabelecimento') do
    @estabelecimento = $response['typeOfEstablishment'][0]['name']
    expect($response.code).to eq (200)
    expect($response.body).to include('typeOfEstablishment')
    expect(@estabelecimento).to eq ('PIZZARIA')
    puts @estabelecimento
end