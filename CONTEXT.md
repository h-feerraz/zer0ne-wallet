# zer0ne-wallet

Sistema de finanças pessoais baseado no Método de Fluxo de Caixa. Ele projeta o saldo de cada dia futuro para apoiar decisões no presente.

## Language

**Saldo**:
Todo o dinheiro disponível para gastar em um dia, em qualquer forma, tratado como um único valor. O que foi guardado ou investido fica de fora.
_Avoid_: Saldo inicial, saldo por conta, patrimônio

**Saldo projetado**:
O saldo calculado para um dia futuro, dentro dos próximos 12 meses.
_Avoid_: Previsão, saldo futuro

**Performance**:
Tudo que entrou menos tudo que saiu em um mês.
_Avoid_: Lucro, resultado

**Lançamento**:
Uma entrada, saída, economia ou fatura com data e valor. Ele é previsto até receber o check, quando passa a confirmado; se a data passou sem check, está atrasado.
_Avoid_: Transação, movimentação

**Recorrência**:
Um lançamento que se repete em um intervalo escolhido pela pessoa, a cada N dias, semanas, meses ou anos. Uma assinatura é uma recorrência paga como saída ou como compra no cartão, conforme a escolha da pessoa.
_Avoid_: Conta fixa, mensalidade

**Limite de atenção**:
O valor configurável abaixo do qual um saldo positivo fica amarelo. O padrão equivale a 7 dias de diário previsto.
_Avoid_: Limite do cartão, margem

### Diário

**Diário previsto**:
O valor estimado de gasto variável por dia, usado no saldo projetado dos dias futuros e de hoje enquanto não há gasto registrado. Um dia que já passou usa só os gastos reais, mesmo que seja zero.
_Avoid_: Limite diário, orçamento

**Gasto do diário**:
Um gasto variável individual, sem boleto e fora do cartão, registrado no dia em que aconteceu.
_Avoid_: Saída, despesa

**Disponível hoje**:
Quanto a pessoa ainda pode gastar hoje para fechar o mês na média do diário previsto, considerando os gastos do diário já feitos no mês. Recomeça a cada mês e nunca fica abaixo de zero.
_Avoid_: Saldo do diário, sobra

### Cartão

**Compra no cartão**:
Uma compra feita no crédito, à vista ou parcelada, que entra nas faturas conforme as datas do cartão. Nunca conta como gasto do diário.
_Avoid_: Gasto no crédito, transação

**Fatura**:
O lançamento que reúne as compras no cartão de um vencimento. Ao ser confirmada, vale o valor realmente pago.
_Avoid_: Conta do cartão
