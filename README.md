# zer0ne-wallet

Sistema de finanças pessoais baseado no Método de Fluxo de Caixa. Ele projeta o saldo de cada dia dos próximos 12 meses para apoiar decisões no presente.

O vocabulário do domínio está em [`CONTEXT.md`](CONTEXT.md), e as decisões de arquitetura estão em [`docs/adr/`](docs/adr/).

## Como rodar

Requisitos: Node.js 24 e pnpm.

```bash
pnpm install
pnpm dev
```

Abra <http://localhost:3000>.

## Stack

Next.js, TypeScript, Tailwind CSS e shadcn/ui. Testes com Vitest.
