import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPA_URL = "https://gcghfbgaapsgpuucvpgb.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZ2hmYmdhYXBzZ3B1dWN2cGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0ODY2NjMsImV4cCI6MjA5MTA2MjY2M30.lDy0NyJO0UAJ68cLnfO46eVKZHuhz8iOwX2dMTwnyHc";
const supabase = createClient(SUPA_URL, SUPA_KEY);

const DADOS_INICIAIS = [{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":150.4,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Aposentadoria","tipo":"E","valor":9421.56,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":125.56,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":18.9,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Dívidas","tipo":"S","valor":278.97,"pago":true,"descricao":"negociação cartão caixa"},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":194.84,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Contas de Consumo (Energia, Água e Luz)","tipo":"S","valor":242.8,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Contas de Consumo (Energia, Água e Luz)","tipo":"S","valor":92.52,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":1195.11,"pago":true,"descricao":"hapvida"},{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":1008.43,"pago":true,"descricao":"hapvida"},{"data":"2026-03-02","categoria":"Impostos","tipo":"S","valor":110.17,"pago":true,"descricao":"iptu"},{"data":"2026-03-02","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":17.19,"pago":true,"descricao":"iof"},{"data":"2026-03-02","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":179.23,"pago":true,"descricao":"juros cheque especial do período"},{"data":"2026-03-03","categoria":"Lazer","tipo":"S","valor":64.89,"pago":true,"descricao":"ifood"},{"data":"2026-03-03","categoria":"Moradia (Condomínio, Aluguel)","tipo":"S","valor":500,"pago":true,"descricao":"condomínio"},{"data":"2026-03-03","categoria":"Telefonia e Internet","tipo":"S","valor":346.5,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Alimentação","tipo":"S","valor":127.68,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Transporte","tipo":"S","valor":6.45,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Transporte","tipo":"S","valor":9,"pago":true,"descricao":"Motorista"},{"data":"2026-03-03","categoria":"Saúde","tipo":"S","valor":267.48,"pago":true,"descricao":""},{"data":"2026-03-06","categoria":"Transporte","tipo":"S","valor":24.16,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Alimentação","tipo":"S","valor":396.74,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":12.64,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":10.99,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Alimentação","tipo":"S","valor":57.49,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Saúde","tipo":"S","valor":227.9,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":32,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Lazer","tipo":"S","valor":17.61,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Transporte","tipo":"S","valor":18.28,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Saúde","tipo":"S","valor":90,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Transporte","tipo":"S","valor":14.5,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Lazer","tipo":"S","valor":5.95,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Transporte","tipo":"S","valor":164.6,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Transporte","tipo":"S","valor":15.62,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":15.75,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":22,"pago":true,"descricao":"Uberstore"},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":22.04,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":16.51,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Alimentação","tipo":"S","valor":85.08,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":10.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Alimentação","tipo":"S","valor":22.79,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":80.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Cuidados Pessoais","tipo":"S","valor":210,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":51.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Saúde","tipo":"S","valor":188.96,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":35.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Alimentação","tipo":"S","valor":22.26,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Outras Despesas","tipo":"S","valor":50,"pago":true,"descricao":"saque"},{"data":"2026-03-13","categoria":"Outras Despesas","tipo":"S","valor":50,"pago":true,"descricao":"saque"},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":174.2,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":9,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Lazer","tipo":"S","valor":75.6,"pago":true,"descricao":"estrada"},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":28.81,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Lazer","tipo":"S","valor":27.24,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":24.09,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":23.42,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":18.75,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Alimentação","tipo":"S","valor":24.55,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Dívidas","tipo":"S","valor":1289.61,"pago":true,"descricao":"cartão savegnago"},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":17,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Transporte","tipo":"S","valor":12.61,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Saúde","tipo":"S","valor":90.81,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Transporte","tipo":"S","valor":12.61,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Lazer","tipo":"S","valor":40.48,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Outras Despesas","tipo":"S","valor":62.41,"pago":true,"descricao":"sindicato"},{"data":"2026-03-23","categoria":"Saúde","tipo":"S","valor":91.85,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Transporte","tipo":"S","valor":16,"pago":true,"descricao":""},{"data":"2026-03-26","categoria":"Alimentação","tipo":"S","valor":79.01,"pago":true,"descricao":""},{"data":"2026-03-26","categoria":"Transporte","tipo":"S","valor":8.99,"pago":true,"descricao":""},{"data":"2026-03-30","categoria":"Lazer","tipo":"S","valor":63.99,"pago":true,"descricao":""},{"data":"2026-03-30","categoria":"Transporte","tipo":"S","valor":18.75,"pago":true,"descricao":""},{"data":"2026-03-31","categoria":"Outras Despesas","tipo":"S","valor":110,"pago":true,"descricao":""},{"data":"2026-03-31","categoria":"Transporte","tipo":"S","valor":15.62,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Aposentadoria","tipo":"E","valor":9711.3,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Cuidados Pessoais","tipo":"S","valor":50,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":14.84,"pago":true,"descricao":"iof"},{"data":"2026-04-01","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":95.95,"pago":true,"descricao":"juros cheque especial do período"},{"data":"2026-04-02","categoria":"Transporte","tipo":"S","valor":19.88,"pago":true,"descricao":""},{"data":"2026-04-02","categoria":"Lazer","tipo":"S","valor":76.69,"pago":true,"descricao":"ifood"}];

const CATEGORIAS_ENTRADA = ["Aposentadoria","13º","Bônus e afins","Serviços Jr.","Serviços Marlene","Rendimentos Financeiros","Outros Recebimentos 1","Outros Recebimentos 2","Outros Recebimentos 3","Outros Recebimentos 4","Outros Recebimentos 5","Outros Recebimentos 6","Outros Recebimentos 7","Outros Recebimentos 8","Outros Recebimentos 9","Outros Recebimentos 10","Outros Recebimentos 11"];
const CATEGORIAS_SAIDA = ["Moradia (Condomínio, Aluguel)","Alimentação","Contas de Consumo (Energia, Água e Luz)","Telefonia e Internet","Saúde","Seguros","Financiamentos","Despesas Financeiras (Juros, IOF...)","Despesas Bancárias","Impostos","Dívidas","Lazer","Cuidados Pessoais","Reservas","Transporte","Manutenção","Outras Despesas"];
const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const MESES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const moeda = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function App() {
  const [lancamentos, setLancamentos] = useState([]);
  const [saldoInicial, setSaldoInicial] = useState(-3019.91);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [syncing, setSyncing] = useState(false);

  const [aba, setAba] = useState("resumo");
  const [mesAtual, setMesAtual] = useState(() => new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(2026);
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroPago, setFiltroPago] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [form, setForm] = useState({ data: new Date().toISOString().slice(0,10), categoria: "", valor: "", descricao: "", pago: true });
  const [editId, setEditId] = useState(null);
  const [confirmaDelete, setConfirmaDelete] = useState(null);
  const [editSaldo, setEditSaldo] = useState(false);
  const [saldoTemp, setSaldoTemp] = useState("");

  // ─── carregar dados do Supabase ───────────────────────────────────────────
  useEffect(() => {
    carregarDados();
    carregarSaldo();

    // tempo real: escuta mudanças na tabela
    const channel = supabase
      .channel("lancamentos-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "lancamentos" }, () => {
        carregarDados();
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  async function carregarDados() {
    const { data, error } = await supabase
      .from("lancamentos")
      .select("*")
      .order("data", { ascending: true });

    if (error) {
      // tabela ainda não existe — popula com dados iniciais
      if (error.code === "42P01") {
        setErro("setup");
      } else {
        setErro(error.message);
      }
    } else if (data.length === 0) {
      // tabela existe mas vazia — importa dados iniciais
      await importarDadosIniciais();
    } else {
      setLancamentos(data);
    }
    setLoading(false);
  }

  async function carregarSaldo() {
    const { data } = await supabase.from("configuracoes").select("valor").eq("chave", "saldo_inicial").single();
    if (data) setSaldoInicial(parseFloat(data.valor));
  }

  async function importarDadosIniciais() {
    setSyncing(true);
    const rows = DADOS_INICIAIS.map(d => ({ data: d.data, categoria: d.categoria, tipo: d.tipo, valor: d.valor, pago: d.pago, descricao: d.descricao }));
    const { data, error } = await supabase.from("lancamentos").insert(rows).select();
    if (!error) setLancamentos(data);
    setSyncing(false);
  }

  async function salvarSaldo(novoSaldo) {
    await supabase.from("configuracoes").upsert({ chave: "saldo_inicial", valor: String(novoSaldo) });
    setSaldoInicial(novoSaldo);
  }

  async function adicionarLancamento(novo) {
    setSyncing(true);
    const { data, error } = await supabase.from("lancamentos").insert([novo]).select();
    if (!error) setLancamentos(prev => [...prev, ...data].sort((a,b) => a.data.localeCompare(b.data)));
    setSyncing(false);
    return !error;
  }

  async function atualizarLancamento(id, atualizado) {
    setSyncing(true);
    const { error } = await supabase.from("lancamentos").update(atualizado).eq("id", id);
    if (!error) setLancamentos(prev => prev.map(l => l.id === id ? { ...l, ...atualizado } : l));
    setSyncing(false);
  }

  async function deletarLancamento(id) {
    setSyncing(true);
    const { error } = await supabase.from("lancamentos").delete().eq("id", id);
    if (!error) setLancamentos(prev => prev.filter(l => l.id !== id));
    setConfirmaDelete(null);
    setSyncing(false);
  }

  // ─── análise mensal ───────────────────────────────────────────────────────
  const analise = useMemo(() => {
    let acum = saldoInicial;
    return MESES.map((_, m) => {
      const p = `${anoAtual}-${String(m+1).padStart(2,"0")}`;
      const its = lancamentos.filter(l => l.data.startsWith(p));
      const e = its.filter(l => l.tipo === "E").reduce((a,l) => a+l.valor, 0);
      const s = its.filter(l => l.tipo === "S").reduce((a,l) => a+l.valor, 0);
      const so = e - s;
      const ac = acum + so;
      acum = ac;
      return { mes: m, entradas: e, saidas: s, saldo: so, acum: ac };
    });
  }, [lancamentos, anoAtual, saldoInicial]);

  const lancamentosMes = useMemo(() => {
    const p = `${anoAtual}-${String(mesAtual+1).padStart(2,"0")}`;
    return lancamentos
      .filter(l => l.data.startsWith(p))
      .filter(l => filtroCategoria === "Todas" || l.categoria === filtroCategoria)
      .filter(l => filtroPago === "Todos" || (filtroPago === "Pago" ? l.pago : !l.pago))
      .filter(l => !busca || l.categoria.toLowerCase().includes(busca.toLowerCase()) || (l.descricao||"").toLowerCase().includes(busca.toLowerCase()))
      .sort((a,b) => a.data.localeCompare(b.data));
  }, [lancamentos, mesAtual, anoAtual, filtroCategoria, filtroPago, busca]);

  const porCategoria = useMemo(() => {
    const p = `${anoAtual}-${String(mesAtual+1).padStart(2,"0")}`;
    const map = {};
    lancamentos.filter(l => l.data.startsWith(p)).forEach(l => {
      if (!map[l.categoria]) map[l.categoria] = { total: 0, tipo: l.tipo };
      map[l.categoria].total += l.valor;
    });
    return Object.entries(map).sort((a,b) => b[1].total - a[1].total);
  }, [lancamentos, mesAtual, anoAtual]);

  const handleSubmit = async () => {
    if (!form.categoria || !form.valor) return;
    const tipo = CATEGORIAS_ENTRADA.includes(form.categoria) ? "E" : "S";
    const payload = { data: form.data, categoria: form.categoria, tipo, valor: parseFloat(form.valor), pago: form.pago, descricao: form.descricao };
    if (editId) {
      await atualizarLancamento(editId, payload);
      setEditId(null);
    } else {
      await adicionarLancamento(payload);
    }
    setForm({ data: new Date().toISOString().slice(0,10), categoria: "", valor: "", descricao: "", pago: true });
    setAba("lancamentos");
  };

  const handleEdit = (l) => {
    setForm({ data: l.data, categoria: l.categoria, valor: String(l.valor), descricao: l.descricao || "", pago: l.pago });
    setEditId(l.id);
    setAba("novo");
  };

  const mesInfo = analise[mesAtual];
  const saldoMesAnterior = mesAtual === 0 ? saldoInicial : analise[mesAtual-1].acum;

  // ─── tela de setup ────────────────────────────────────────────────────────
  if (erro === "setup") {
    return (
      <div style={{ fontFamily: "Georgia, serif", maxWidth: 680, margin: "40px auto", padding: "0 16px" }}>
        <div style={{ background: "#1a3a2a", color: "#e8dcc8", padding: 24, borderRadius: "10px 10px 0 0" }}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>⚙️ Configuração Inicial</div>
          <div style={{ fontSize: 13, opacity: 0.75, marginTop: 4 }}>Execute o SQL abaixo no Supabase para criar as tabelas</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "0 0 10px 10px", padding: 24 }}>
          <p style={{ marginBottom: 16, fontSize: 14 }}>Acesse <strong>Supabase → SQL Editor</strong> e execute:</p>
          <pre style={{ background: "#1e1e1e", color: "#d4d4d4", padding: 20, borderRadius: 8, fontSize: 12, overflow: "auto", lineHeight: 1.6 }}>{`-- 1. Tabela de lançamentos
create table lancamentos (
  id uuid primary key default gen_random_uuid(),
  data date not null,
  categoria text not null,
  tipo text not null check (tipo in ('E','S')),
  valor numeric(12,2) not null,
  pago boolean default true,
  descricao text,
  created_at timestamptz default now()
);

-- 2. Tabela de configurações
create table configuracoes (
  chave text primary key,
  valor text not null
);

-- 3. Inserir saldo inicial
insert into configuracoes (chave, valor)
values ('saldo_inicial', '-3019.91');

-- 4. Liberar acesso público (RLS off para uso familiar)
alter table lancamentos disable row level security;
alter table configuracoes disable row level security;`}</pre>
          <button onClick={() => { setErro(null); setLoading(true); carregarDados(); }}
            style={{ marginTop: 20, padding: "10px 24px", background: "#2d5a3d", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14 }}>
            ✓ Já executei — carregar app
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ fontFamily: "Georgia, serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", flexDirection: "column", gap: 12, color: "#2d5a3d" }}>
        <div style={{ fontSize: 32 }}>💰</div>
        <div style={{ fontSize: 16 }}>Carregando dados...</div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#faf8f5", color: "#2c2416" }}>
      {/* Header */}
      <div style={{ background: "#1a3a2a", color: "#e8dcc8", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 1 }}>💰 Fluxo de Caixa — G&M</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2, display: "flex", alignItems: "center", gap: 8 }}>
            {syncing ? "🔄 Sincronizando..." : "☁️ Dados em nuvem — Supabase"}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setAnoAtual(a => a-1)} style={btnNav}>◀</button>
          <span style={{ fontWeight: "bold", minWidth: 44, textAlign: "center" }}>{anoAtual}</span>
          <button onClick={() => setAnoAtual(a => a+1)} style={btnNav}>▶</button>
        </div>
      </div>

      {/* Abas */}
      <div style={{ display: "flex", background: "#2d5a3d", padding: "0 12px", gap: 4 }}>
        {[["resumo","📊 Resumo"],["lancamentos","📋 Lançamentos"],["analise","📈 Análise"],["novo","➕ Novo"]].map(([id,lb]) => (
          <button key={id} onClick={() => { setAba(id); if (id !== "novo" && editId) { setEditId(null); }}}
            style={{ ...abaBtn, background: aba===id ? "#faf8f5" : "transparent", color: aba===id ? "#1a3a2a" : "#c8dfc8", fontWeight: aba===id ? "bold" : "normal" }}>
            {lb}
          </button>
        ))}
      </div>

      <div style={{ padding: "16px", maxWidth: 900, margin: "0 auto" }}>

        {/* ── RESUMO ── */}
        {aba === "resumo" && (
          <div>
            <div style={{ ...card, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>Saldo Inicial do Ano</div>
                <div style={{ fontSize: 22, fontWeight: "bold", color: saldoInicial >= 0 ? "#1a7a3a" : "#c0392b" }}>{moeda(saldoInicial)}</div>
              </div>
              {editSaldo ? (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input type="number" value={saldoTemp} onChange={e => setSaldoTemp(e.target.value)} style={{ ...inp, width: 130 }} />
                  <button onClick={async () => { await salvarSaldo(parseFloat(saldoTemp)||0); setEditSaldo(false); }} style={btnVerde}>✓</button>
                  <button onClick={() => setEditSaldo(false)} style={btnCinza}>✕</button>
                </div>
              ) : (
                <button onClick={() => { setEditSaldo(true); setSaldoTemp(String(saldoInicial)); }} style={btnCinza}>✏️ Editar</button>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 10 }}>
              {analise.map(({ mes, entradas, saidas, saldo, acum }) => (
                <div key={mes} onClick={() => { setMesAtual(mes); setAba("lancamentos"); }}
                  style={{ ...card, cursor: "pointer", border: `2px solid ${mes === mesAtual ? "#2d5a3d" : "transparent"}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontWeight: "bold", color: "#2d5a3d", fontSize: 13 }}>{MESES[mes]}/{anoAtual}</span>
                    <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 8, background: saldo >= 0 ? "#d4edda" : "#fde8e8", color: saldo >= 0 ? "#155724" : "#721c24" }}>
                      {saldo >= 0 ? "▲" : "▼"} {moeda(Math.abs(saldo))}
                    </span>
                  </div>
                  <div style={{ fontSize: 11 }}>
                    <div style={{ color: "#1a7a3a" }}>↑ {moeda(entradas)}</div>
                    <div style={{ color: "#c0392b" }}>↓ {moeda(saidas)}</div>
                    <div style={{ marginTop: 4, paddingTop: 3, borderTop: "1px solid #eee", fontWeight: "bold", color: acum >= 0 ? "#1a7a3a" : "#c0392b", fontSize: 11 }}>
                      Acum: {moeda(acum)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LANÇAMENTOS ── */}
        {aba === "lancamentos" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <button onClick={() => setMesAtual(m => (m+11)%12)} style={btnSm}>◀</button>
                <span style={{ fontWeight: "bold", fontSize: 14, minWidth: 110, textAlign: "center" }}>{MESES_FULL[mesAtual]} {anoAtual}</span>
                <button onClick={() => setMesAtual(m => (m+1)%12)} style={btnSm}>▶</button>
              </div>
              <input placeholder="🔍 Buscar..." value={busca} onChange={e => setBusca(e.target.value)} style={{ ...inp, maxWidth: 160 }} />
              <select value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)} style={{ ...inp, maxWidth: 200 }}>
                <option>Todas</option>
                <optgroup label="Entradas">{CATEGORIAS_ENTRADA.map(c => <option key={c}>{c}</option>)}</optgroup>
                <optgroup label="Saídas">{CATEGORIAS_SAIDA.map(c => <option key={c}>{c}</option>)}</optgroup>
              </select>
              <select value={filtroPago} onChange={e => setFiltroPago(e.target.value)} style={{ ...inp, maxWidth: 120 }}>
                <option>Todos</option><option>Pago</option><option>Pendente</option>
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 12 }}>
              {[["Saldo Anterior", saldoMesAnterior, ""], ["Entradas", mesInfo.entradas, "#1a7a3a"], ["Saídas", mesInfo.saidas, "#c0392b"]].map(([l,v,c]) => (
                <div key={l} style={{ ...card, textAlign: "center", padding: "10px 6px" }}>
                  <div style={{ fontSize: 10, color: "#888" }}>{l}</div>
                  <div style={{ fontSize: 15, fontWeight: "bold", color: c || (v >= 0 ? "#1a7a3a" : "#c0392b") }}>{moeda(v)}</div>
                </div>
              ))}
            </div>

            {lancamentosMes.length === 0 ? (
              <div style={{ textAlign: "center", color: "#888", padding: 40 }}>
                Sem lançamentos. <button onClick={() => setAba("novo")} style={{ color: "#2d5a3d", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Adicionar</button>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: "#2d5a3d", color: "#e8dcc8" }}>
                      {["Data","Categoria","Valor","Pago","Descrição",""].map(h => <th key={h} style={{ padding: "7px 9px", textAlign: "left", fontWeight: "normal" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {lancamentosMes.map((l, i) => (
                      <tr key={l.id} style={{ background: i%2===0 ? "#fff" : "#f9f7f4", borderBottom: "1px solid #ede8e0" }}>
                        <td style={{ padding: "6px 9px", whiteSpace: "nowrap" }}>{l.data.slice(5).replace("-","/")}</td>
                        <td style={{ padding: "6px 9px" }}>
                          <span style={{ padding: "2px 7px", borderRadius: 10, fontSize: 11, background: l.tipo==="E"?"#d4edda":"#fde8e8", color: l.tipo==="E"?"#155724":"#721c24" }}>{l.categoria}</span>
                        </td>
                        <td style={{ padding: "6px 9px", fontWeight: "bold", color: l.tipo==="E"?"#1a7a3a":"#c0392b" }}>{l.tipo==="E"?"+":"-"}{moeda(l.valor)}</td>
                        <td style={{ padding: "6px 9px" }}>
                          <button onClick={() => atualizarLancamento(l.id, { pago: !l.pago })} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15 }}>
                            {l.pago ? "✅" : "⬜"}
                          </button>
                        </td>
                        <td style={{ padding: "6px 9px", color: "#666", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.descricao || "—"}</td>
                        <td style={{ padding: "6px 9px", whiteSpace: "nowrap" }}>
                          <button onClick={() => handleEdit(l)} style={{ ...btnSm, background: "#e8f0fe", color: "#1a3a8f", marginRight: 4 }}>✏️</button>
                          {confirmaDelete === l.id ? (
                            <>
                              <button onClick={() => deletarLancamento(l.id)} style={{ ...btnSm, background: "#f8d7da", color: "#721c24" }}>✓ Sim</button>
                              <button onClick={() => setConfirmaDelete(null)} style={btnSm}>✕</button>
                            </>
                          ) : (
                            <button onClick={() => setConfirmaDelete(l.id)} style={{ ...btnSm, background: "#fde8e8", color: "#c0392b" }}>🗑</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── ANÁLISE ── */}
        {aba === "analise" && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <button onClick={() => setMesAtual(m => (m+11)%12)} style={btnSm}>◀</button>
              <span style={{ fontWeight: "bold", fontSize: 14, minWidth: 120, textAlign: "center" }}>{MESES_FULL[mesAtual]} {anoAtual}</span>
              <button onClick={() => setMesAtual(m => (m+1)%12)} style={btnSm}>▶</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
              {[["Saldo Inicial", saldoMesAnterior],["Entradas", mesInfo.entradas],["Saídas", mesInfo.saidas],["Saldo Acumulado", mesInfo.acum]].map(([l,v]) => (
                <div key={l} style={{ ...card, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#888" }}>{l}</div>
                  <div style={{ fontSize: 18, fontWeight: "bold", color: v >= 0 ? "#1a7a3a" : "#c0392b" }}>{moeda(v)}</div>
                </div>
              ))}
            </div>

            <div style={{ ...card, marginBottom: 14 }}>
              <div style={{ fontWeight: "bold", color: "#2d5a3d", marginBottom: 10, fontSize: 13 }}>Por categoria — {MESES_FULL[mesAtual]}</div>
              {porCategoria.length === 0 && <div style={{ color: "#888", fontSize: 13 }}>Sem lançamentos.</div>}
              {porCategoria.map(([cat, { total, tipo }]) => {
                const max = Math.max(...porCategoria.map(([,{total}]) => total));
                return (
                  <div key={cat} style={{ marginBottom: 9 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 2 }}>
                      <span style={{ color: tipo==="E"?"#1a7a3a":"#c0392b" }}>{cat}</span>
                      <span style={{ fontWeight: "bold" }}>{moeda(total)}</span>
                    </div>
                    <div style={{ height: 7, background: "#eee", borderRadius: 4 }}>
                      <div style={{ height: 7, borderRadius: 4, width: `${((total/max)*100).toFixed(1)}%`, background: tipo==="E"?"#27ae60":"#e74c3c" }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ ...card, overflowX: "auto" }}>
              <div style={{ fontWeight: "bold", color: "#2d5a3d", marginBottom: 10, fontSize: 13 }}>Visão anual {anoAtual}</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#2d5a3d", color: "#e8dcc8" }}>
                    {["Mês","Entradas","Saídas","Saldo Op.","Acumulado"].map(h => <th key={h} style={{ padding: "6px 9px", textAlign: "right", fontWeight: "normal" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {analise.map(({ mes, entradas, saidas, saldo, acum }) => (
                    <tr key={mes} style={{ background: mes===mesAtual?"#f0f7f0":mes%2===0?"#fff":"#f9f7f4", cursor: "pointer" }} onClick={() => setMesAtual(mes)}>
                      <td style={{ padding: "5px 9px", fontWeight: mes===mesAtual?"bold":"normal" }}>{MESES[mes]}</td>
                      <td style={{ padding: "5px 9px", textAlign: "right", color: "#1a7a3a" }}>{moeda(entradas)}</td>
                      <td style={{ padding: "5px 9px", textAlign: "right", color: "#c0392b" }}>{moeda(saidas)}</td>
                      <td style={{ padding: "5px 9px", textAlign: "right", fontWeight: "bold", color: saldo>=0?"#1a7a3a":"#c0392b" }}>{moeda(saldo)}</td>
                      <td style={{ padding: "5px 9px", textAlign: "right", fontWeight: "bold", color: acum>=0?"#1a7a3a":"#c0392b" }}>{moeda(acum)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── NOVO / EDITAR ── */}
        {aba === "novo" && (
          <div style={{ maxWidth: 460 }}>
            <div style={card}>
              <div style={{ fontWeight: "bold", fontSize: 15, color: "#2d5a3d", marginBottom: 14 }}>
                {editId ? "✏️ Editar Lançamento" : "➕ Novo Lançamento"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                <label style={lbl}>Data<input type="date" value={form.data} onChange={e => setForm({...form, data: e.target.value})} style={inp} /></label>
                <label style={lbl}>Categoria
                  <select value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})} style={inp}>
                    <option value="">Selecione...</option>
                    <optgroup label="✅ Entradas">{CATEGORIAS_ENTRADA.map(c => <option key={c}>{c}</option>)}</optgroup>
                    <optgroup label="❌ Saídas">{CATEGORIAS_SAIDA.map(c => <option key={c}>{c}</option>)}</optgroup>
                  </select>
                </label>
                <label style={lbl}>Valor (R$)<input type="number" step="0.01" min="0" placeholder="0,00" value={form.valor} onChange={e => setForm({...form, valor: e.target.value})} style={inp} /></label>
                <label style={lbl}>Descrição (opcional)<input type="text" placeholder="Ex: Hapvida, condomínio..." value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})} style={inp} /></label>
                <label style={{ ...lbl, flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <input type="checkbox" checked={form.pago} onChange={e => setForm({...form, pago: e.target.checked})} style={{ width: 16, height: 16 }} />
                  Já foi pago/recebido
                </label>
                <button onClick={handleSubmit} disabled={!form.categoria || !form.valor || syncing}
                  style={{ ...btnVerde, opacity: (!form.categoria || !form.valor || syncing) ? 0.5 : 1 }}>
                  {syncing ? "Salvando..." : editId ? "Salvar alterações" : "Adicionar lançamento"}
                </button>
                {editId && <button onClick={() => { setEditId(null); setForm({ data: new Date().toISOString().slice(0,10), categoria: "", valor: "", descricao: "", pago: true }); setAba("lancamentos"); }} style={btnCinza}>Cancelar</button>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const card = { background: "#fff", borderRadius: 10, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" };
const abaBtn = { padding: "9px 14px", border: "none", cursor: "pointer", fontSize: 12, borderRadius: "7px 7px 0 0", fontFamily: "Georgia, serif" };
const inp = { padding: "8px 10px", border: "1px solid #d4c9b8", borderRadius: 6, fontSize: 13, fontFamily: "Georgia, serif", width: "100%", background: "#fafaf8" };
const btnVerde = { padding: "10px 18px", background: "#2d5a3d", color: "#fff", border: "none", borderRadius: 7, cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif", width: "100%" };
const btnCinza = { padding: "9px 14px", background: "#e8e4dc", color: "#444", border: "none", borderRadius: 7, cursor: "pointer", fontSize: 13, width: "100%" };
const btnNav = { padding: "4px 9px", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 5, cursor: "pointer", color: "#e8dcc8", fontSize: 13 };
const btnSm = { padding: "4px 8px", background: "#e8e4dc", border: "none", borderRadius: 5, cursor: "pointer", fontSize: 12 };
const lbl = { display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: "#555" };
