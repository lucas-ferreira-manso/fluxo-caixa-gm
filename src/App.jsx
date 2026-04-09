import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPA_URL = "https://gcghfbgaapsgpuucvpgb.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZ2hmYmdhYXBzZ3B1dWN2cGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0ODY2NjMsImV4cCI6MjA5MTA2MjY2M30.lDy0NyJO0UAJ68cLnfO46eVKZHuhz8iOwX2dMTwnyHc";
const sb = createClient(SUPA_URL, SUPA_KEY);

const DADOS_INICIAIS = [{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":150.4,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Aposentadoria","tipo":"E","valor":9421.56,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":125.56,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":18.9,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Dívidas","tipo":"S","valor":278.97,"pago":true,"descricao":"negociação cartão caixa"},{"data":"2026-03-02","categoria":"Telefonia e Internet","tipo":"S","valor":194.84,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Contas de Consumo (Energia, Água e Luz)","tipo":"S","valor":242.8,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Contas de Consumo (Energia, Água e Luz)","tipo":"S","valor":92.52,"pago":true,"descricao":""},{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":1195.11,"pago":true,"descricao":"hapvida"},{"data":"2026-03-02","categoria":"Saúde","tipo":"S","valor":1008.43,"pago":true,"descricao":"hapvida"},{"data":"2026-03-02","categoria":"Impostos","tipo":"S","valor":110.17,"pago":true,"descricao":"iptu"},{"data":"2026-03-02","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":17.19,"pago":true,"descricao":"iof"},{"data":"2026-03-02","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":179.23,"pago":true,"descricao":"juros cheque especial do período"},{"data":"2026-03-03","categoria":"Lazer","tipo":"S","valor":64.89,"pago":true,"descricao":"ifood"},{"data":"2026-03-03","categoria":"Moradia (Condomínio, Aluguel)","tipo":"S","valor":500,"pago":true,"descricao":"condomínio"},{"data":"2026-03-03","categoria":"Telefonia e Internet","tipo":"S","valor":346.5,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Alimentação","tipo":"S","valor":127.68,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Transporte","tipo":"S","valor":6.45,"pago":true,"descricao":""},{"data":"2026-03-03","categoria":"Transporte","tipo":"S","valor":9,"pago":true,"descricao":"Motorista"},{"data":"2026-03-03","categoria":"Saúde","tipo":"S","valor":267.48,"pago":true,"descricao":""},{"data":"2026-03-06","categoria":"Transporte","tipo":"S","valor":24.16,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Alimentação","tipo":"S","valor":396.74,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":12.64,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":10.99,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Alimentação","tipo":"S","valor":57.49,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Saúde","tipo":"S","valor":227.9,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Transporte","tipo":"S","valor":32,"pago":true,"descricao":""},{"data":"2026-03-09","categoria":"Lazer","tipo":"S","valor":17.61,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Transporte","tipo":"S","valor":18.28,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Saúde","tipo":"S","valor":90,"pago":true,"descricao":""},{"data":"2026-03-10","categoria":"Transporte","tipo":"S","valor":14.5,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Lazer","tipo":"S","valor":5.95,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Transporte","tipo":"S","valor":164.6,"pago":true,"descricao":""},{"data":"2026-03-11","categoria":"Transporte","tipo":"S","valor":15.62,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":15.75,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":22,"pago":true,"descricao":"Uberstore"},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":22.04,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":16.51,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Alimentação","tipo":"S","valor":85.08,"pago":true,"descricao":""},{"data":"2026-03-12","categoria":"Transporte","tipo":"S","valor":10.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Alimentação","tipo":"S","valor":22.79,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":80.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Cuidados Pessoais","tipo":"S","valor":210,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":51.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Saúde","tipo":"S","valor":188.96,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Lazer","tipo":"S","valor":35.99,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Alimentação","tipo":"S","valor":22.26,"pago":true,"descricao":""},{"data":"2026-03-13","categoria":"Outras Despesas","tipo":"S","valor":50,"pago":true,"descricao":"saque"},{"data":"2026-03-13","categoria":"Outras Despesas","tipo":"S","valor":50,"pago":true,"descricao":"saque"},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":174.2,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":9,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Lazer","tipo":"S","valor":75.6,"pago":true,"descricao":"estrada"},{"data":"2026-03-17","categoria":"Transporte","tipo":"S","valor":28.81,"pago":true,"descricao":""},{"data":"2026-03-17","categoria":"Lazer","tipo":"S","valor":27.24,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":24.09,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":23.42,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":18.75,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Alimentação","tipo":"S","valor":24.55,"pago":true,"descricao":""},{"data":"2026-03-19","categoria":"Dívidas","tipo":"S","valor":1289.61,"pago":true,"descricao":"cartão savegnago"},{"data":"2026-03-19","categoria":"Transporte","tipo":"S","valor":17,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Transporte","tipo":"S","valor":12.61,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Saúde","tipo":"S","valor":90.81,"pago":true,"descricao":""},{"data":"2026-03-20","categoria":"Transporte","tipo":"S","valor":12.61,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Lazer","tipo":"S","valor":40.48,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Outras Despesas","tipo":"S","valor":62.41,"pago":true,"descricao":"sindicato"},{"data":"2026-03-23","categoria":"Saúde","tipo":"S","valor":91.85,"pago":true,"descricao":""},{"data":"2026-03-23","categoria":"Transporte","tipo":"S","valor":16,"pago":true,"descricao":""},{"data":"2026-03-26","categoria":"Alimentação","tipo":"S","valor":79.01,"pago":true,"descricao":""},{"data":"2026-03-26","categoria":"Transporte","tipo":"S","valor":8.99,"pago":true,"descricao":""},{"data":"2026-03-30","categoria":"Lazer","tipo":"S","valor":63.99,"pago":true,"descricao":""},{"data":"2026-03-30","categoria":"Transporte","tipo":"S","valor":18.75,"pago":true,"descricao":""},{"data":"2026-03-31","categoria":"Outras Despesas","tipo":"S","valor":110,"pago":true,"descricao":""},{"data":"2026-03-31","categoria":"Transporte","tipo":"S","valor":15.62,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Aposentadoria","tipo":"E","valor":9711.3,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Cuidados Pessoais","tipo":"S","valor":50,"pago":true,"descricao":""},{"data":"2026-04-01","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":14.84,"pago":true,"descricao":"iof"},{"data":"2026-04-01","categoria":"Despesas Financeiras (Juros, IOF...)","tipo":"S","valor":95.95,"pago":true,"descricao":"juros cheque especial do período"},{"data":"2026-04-02","categoria":"Transporte","tipo":"S","valor":19.88,"pago":true,"descricao":""},{"data":"2026-04-02","categoria":"Lazer","tipo":"S","valor":76.69,"pago":true,"descricao":"ifood"}];

const CE = ["Aposentadoria","13º","Bônus e afins","Serviços Jr.","Serviços Marlene","Rendimentos Financeiros","Outros Recebimentos 1","Outros Recebimentos 2","Outros Recebimentos 3","Outros Recebimentos 4","Outros Recebimentos 5","Outros Recebimentos 6","Outros Recebimentos 7","Outros Recebimentos 8","Outros Recebimentos 9","Outros Recebimentos 10","Outros Recebimentos 11"];
const CS = ["Moradia (Condomínio, Aluguel)","Alimentação","Contas de Consumo (Energia, Água e Luz)","Telefonia e Internet","Saúde","Seguros","Financiamentos","Despesas Financeiras (Juros, IOF...)","Despesas Bancárias","Impostos","Dívidas","Lazer","Cuidados Pessoais","Reservas","Transporte","Manutenção","Outras Despesas"];
const TODAS = [...CE, ...CS];
const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const MESES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const moeda = v => v.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
const hoje = () => new Date().toISOString().slice(0,10);

export default function App() {
  const [lancamentos, setLancamentos] = useState([]);
  const [orcamentos, setOrcamentos] = useState({}); // { categoria: valor, __total_entradas__: valor, __total_saidas__: valor }
  const [saldoInicial, setSaldoInicial] = useState(-3019.91);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [aba, setAba] = useState("resumo");
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(2026);
  const [filtCat, setFiltCat] = useState("Todas");
  const [filtPago, setFiltPago] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [form, setForm] = useState({ data: hoje(), categoria:"", valor:"", descricao:"", pago:true });
  const [editId, setEditId] = useState(null);
  const [confirmDel, setConfirmDel] = useState(null);
  const [editSaldo, setEditSaldo] = useState(false);
  const [saldoTemp, setSaldoTemp] = useState("");
  const [orcEdit, setOrcEdit] = useState({}); // edição local dos orçamentos

  // ── Supabase ────────────────────────────────────────────────────────────────
  useEffect(() => { init(); }, []);

  async function init() {
    const [{ data: lanc, error }, { data: cfgs }] = await Promise.all([
      sb.from("lancamentos").select("*").order("data"),
      sb.from("configuracoes").select("*")
    ]);
    if (error?.code === "42P01") { setLoading(false); return; }
    if (lanc) {
      if (lanc.length === 0) await importarIniciais();
      else setLancamentos(lanc);
    }
    if (cfgs) {
      const si = cfgs.find(c => c.chave === "saldo_inicial");
      if (si) setSaldoInicial(parseFloat(si.valor));
      const orc = cfgs.find(c => c.chave === "orcamentos");
      if (orc) { try { setOrcamentos(JSON.parse(orc.valor)); } catch {} }
    }
    setLoading(false);
    // realtime
    sb.channel("lc").on("postgres_changes", { event:"*", schema:"public", table:"lancamentos" }, async () => {
      const { data } = await sb.from("lancamentos").select("*").order("data");
      if (data) setLancamentos(data);
    }).subscribe();
    sb.channel("cfg").on("postgres_changes", { event:"*", schema:"public", table:"configuracoes" }, async () => {
      const { data } = await sb.from("configuracoes").select("*");
      if (data) {
        const orc = data.find(c => c.chave === "orcamentos");
        if (orc) { try { setOrcamentos(JSON.parse(orc.valor)); } catch {} }
        const si = data.find(c => c.chave === "saldo_inicial");
        if (si) setSaldoInicial(parseFloat(si.valor));
      }
    }).subscribe();
  }

  async function importarIniciais() {
    const { data } = await sb.from("lancamentos").insert(DADOS_INICIAIS).select();
    if (data) setLancamentos(data);
  }

  async function salvarSaldoDB(v) {
    await sb.from("configuracoes").upsert({ chave:"saldo_inicial", valor:String(v) });
    setSaldoInicial(v);
  }

  async function salvarOrcamentos(novoOrc) {
    await sb.from("configuracoes").upsert({ chave:"orcamentos", valor:JSON.stringify(novoOrc) });
    setOrcamentos(novoOrc);
  }

  async function addLanc(row) {
    setSyncing(true);
    const { data } = await sb.from("lancamentos").insert([row]).select();
    if (data) setLancamentos(prev => [...prev, ...data].sort((a,b)=>a.data.localeCompare(b.data)));
    setSyncing(false);
  }

  async function updLanc(id, row) {
    setSyncing(true);
    await sb.from("lancamentos").update(row).eq("id", id);
    setLancamentos(prev => prev.map(l => l.id===id ? {...l,...row} : l));
    setSyncing(false);
  }

  async function delLanc(id) {
    setSyncing(true);
    await sb.from("lancamentos").delete().eq("id", id);
    setLancamentos(prev => prev.filter(l => l.id!==id));
    setConfirmDel(null); setSyncing(false);
  }

  // ── Cálculos ────────────────────────────────────────────────────────────────
  const analise = useMemo(() => {
    let ac = saldoInicial;
    return MESES.map((_,m) => {
      const p = `${ano}-${String(m+1).padStart(2,"0")}`;
      const its = lancamentos.filter(l => l.data.startsWith(p));
      const e = its.filter(l=>l.tipo==="E").reduce((a,l)=>a+Number(l.valor),0);
      const s = its.filter(l=>l.tipo==="S").reduce((a,l)=>a+Number(l.valor),0);
      const so = e-s; const acum = ac+so; ac = acum;
      return { mes:m, e, s, so, acum };
    });
  }, [lancamentos, ano, saldoInicial]);

  const lancMes = useMemo(() => {
    const p = `${ano}-${String(mes+1).padStart(2,"0")}`;
    return lancamentos
      .filter(l => l.data.startsWith(p) && (filtCat==="Todas"||l.categoria===filtCat) && (filtPago==="Todos"||(filtPago==="Pago"?l.pago:!l.pago)) && (!busca||l.categoria.toLowerCase().includes(busca.toLowerCase())||(l.descricao||"").toLowerCase().includes(busca.toLowerCase())))
      .sort((a,b)=>a.data.localeCompare(b.data));
  }, [lancamentos, mes, ano, filtCat, filtPago, busca]);

  const porCat = useMemo(() => {
    const p = `${ano}-${String(mes+1).padStart(2,"0")}`;
    const m = {};
    lancamentos.filter(l=>l.data.startsWith(p)).forEach(l=>{
      if(!m[l.categoria]) m[l.categoria]={total:0,tipo:l.tipo};
      m[l.categoria].total += Number(l.valor);
    });
    return Object.entries(m).sort((a,b)=>b[1].total-a[1].total);
  }, [lancamentos, mes, ano]);

  // ── Orçamento: realizado por categoria no mês ────────────────────────────
  const realizadoPorCat = useMemo(() => {
    const p = `${ano}-${String(mes+1).padStart(2,"0")}`;
    const m = {};
    lancamentos.filter(l=>l.data.startsWith(p)).forEach(l=>{
      if(!m[l.categoria]) m[l.categoria] = 0;
      m[l.categoria] += Number(l.valor);
    });
    return m;
  }, [lancamentos, mes, ano]);

  const miAtual = analise[mes];
  const saldoAnt = mes===0 ? saldoInicial : analise[mes-1].acum;

  const handleSubmit = async () => {
    if (!form.categoria || !form.valor) return;
    const tipo = CE.includes(form.categoria) ? "E" : "S";
    const row = { data:form.data, categoria:form.categoria, tipo, valor:parseFloat(form.valor), pago:form.pago, descricao:form.descricao };
    if (editId) { await updLanc(editId, row); setEditId(null); }
    else { await addLanc(row); }
    setForm({ data:hoje(), categoria:"", valor:"", descricao:"", pago:true });
    setAba("lancamentos");
  };

  const iniciarEditOrc = () => {
    setOrcEdit({ ...orcamentos });
  };

  const salvarOrcUI = async () => {
    const limpo = {};
    Object.entries(orcEdit).forEach(([k,v]) => { const n = parseFloat(v); if (!isNaN(n) && n > 0) limpo[k] = n; });
    await salvarOrcamentos(limpo);
    setOrcEdit(null);
  };

  if (loading) return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", flexDirection:"column", gap:12, color:"#2d5a3d", fontFamily:"Georgia,serif" }}>
      <div style={{ fontSize:32 }}>💰</div>
      <div>Carregando dados...</div>
    </div>
  );

  return (
    <div style={{ fontFamily:"Georgia,serif", minHeight:"100vh", background:"#faf8f5", color:"#2c2416" }}>
      {/* Header */}
      <div style={{ background:"#1a3a2a", color:"#e8dcc8", padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ fontSize:18, fontWeight:"bold" }}>💰 Fluxo de Caixa — G&M</div>
          <div style={{ fontSize:11, opacity:.7, marginTop:2 }}>{syncing ? "🔄 Sincronizando..." : "☁️ Dados em nuvem em tempo real"}</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:7 }}>
          <button onClick={() => setAno(a=>a-1)} style={s.btnNav}>◀</button>
          <span style={{ fontWeight:"bold", minWidth:44, textAlign:"center" }}>{ano}</span>
          <button onClick={() => setAno(a=>a+1)} style={s.btnNav}>▶</button>
        </div>
      </div>

      {/* Abas */}
      <div style={{ display:"flex", background:"#2d5a3d", padding:"0 12px", gap:4, flexWrap:"wrap" }}>
        {[["resumo","📊 Resumo"],["lancamentos","📋 Lançamentos"],["analise","📈 Análise"],["orcamento","🎯 Orçamento"],["novo","➕ Novo"]].map(([id,lb]) => (
          <button key={id} onClick={() => { setAba(id); if(id!=="novo"&&editId) setEditId(null); if(id==="orcamento") iniciarEditOrc(); }}
            style={{ ...s.abaBtn, background:aba===id?"#faf8f5":"transparent", color:aba===id?"#1a3a2a":"#c8dfc8", fontWeight:aba===id?"bold":"normal" }}>
            {lb}
          </button>
        ))}
      </div>

      <div style={{ padding:16, maxWidth:900, margin:"0 auto" }}>

        {/* ── RESUMO ── */}
        {aba==="resumo" && (
          <div>
            <div style={{ ...s.card, marginBottom:14, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontSize:11, color:"#888", textTransform:"uppercase", letterSpacing:1 }}>Saldo Inicial do Ano</div>
                <div style={{ fontSize:22, fontWeight:"bold", color:saldoInicial>=0?"#1a7a3a":"#c0392b" }}>{moeda(saldoInicial)}</div>
              </div>
              {editSaldo ? (
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <input type="number" value={saldoTemp} onChange={e=>setSaldoTemp(e.target.value)} style={{ ...s.inp, width:130 }} />
                  <button onClick={async()=>{await salvarSaldoDB(parseFloat(saldoTemp)||0);setEditSaldo(false);}} style={s.btnVerde}>✓</button>
                  <button onClick={()=>setEditSaldo(false)} style={s.btnCinza}>✕</button>
                </div>
              ) : <button onClick={()=>{setEditSaldo(true);setSaldoTemp(String(saldoInicial));}} style={s.btnCinza}>✏️ Editar</button>}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(165px,1fr))", gap:8 }}>
              {analise.map(({mes:m,e,s:sd,so,acum}) => (
                <div key={m} onClick={()=>{setMes(m);setAba("lancamentos");}}
                  style={{ ...s.card, cursor:"pointer", border:`2px solid ${m===mes?"#2d5a3d":"transparent"}` }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                    <span style={{ fontWeight:"bold", color:"#2d5a3d", fontSize:12 }}>{MESES[m]}/{ano}</span>
                    <span style={{ fontSize:10, padding:"1px 5px", borderRadius:8, background:so>=0?"#d4edda":"#fde8e8", color:so>=0?"#155724":"#721c24" }}>
                      {so>=0?"▲":"▼"} {moeda(Math.abs(so))}
                    </span>
                  </div>
                  <div style={{ fontSize:11 }}>
                    <div style={{ color:"#1a7a3a" }}>↑ {moeda(e)}</div>
                    <div style={{ color:"#c0392b" }}>↓ {moeda(sd)}</div>
                    <div style={{ marginTop:4, paddingTop:3, borderTop:"1px solid #eee", fontWeight:"bold", fontSize:11, color:acum>=0?"#1a7a3a":"#c0392b" }}>Acum: {moeda(acum)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LANÇAMENTOS ── */}
        {aba==="lancamentos" && (
          <div>
            <div style={{ display:"flex", gap:8, marginBottom:12, flexWrap:"wrap", alignItems:"center" }}>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <button onClick={()=>setMes(m=>(m+11)%12)} style={s.btnSm}>◀</button>
                <span style={{ fontWeight:"bold", fontSize:13, minWidth:110, textAlign:"center" }}>{MESES_FULL[mes]} {ano}</span>
                <button onClick={()=>setMes(m=>(m+1)%12)} style={s.btnSm}>▶</button>
              </div>
              <input placeholder="🔍 Buscar..." value={busca} onChange={e=>setBusca(e.target.value)} style={{ ...s.inp, maxWidth:150 }} />
              <select value={filtCat} onChange={e=>setFiltCat(e.target.value)} style={{ ...s.inp, maxWidth:195 }}>
                <option>Todas</option>
                <optgroup label="Entradas">{CE.map(c=><option key={c}>{c}</option>)}</optgroup>
                <optgroup label="Saídas">{CS.map(c=><option key={c}>{c}</option>)}</optgroup>
              </select>
              <select value={filtPago} onChange={e=>setFiltPago(e.target.value)} style={{ ...s.inp, maxWidth:115 }}>
                <option>Todos</option><option>Pago</option><option>Pendente</option>
              </select>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:12 }}>
              {[["Saldo Anterior",saldoAnt,""],["Entradas",miAtual.e,"#1a7a3a"],["Saídas",miAtual.s,"#c0392b"]].map(([l,v,c])=>(
                <div key={l} style={{ ...s.card, textAlign:"center", padding:"10px 6px" }}>
                  <div style={{ fontSize:10, color:"#888" }}>{l}</div>
                  <div style={{ fontSize:14, fontWeight:"bold", color:c||(v>=0?"#1a7a3a":"#c0392b") }}>{moeda(v)}</div>
                </div>
              ))}
            </div>
            {lancMes.length===0 ? (
              <div style={{ textAlign:"center", color:"#888", padding:40 }}>Sem lançamentos. <button onClick={()=>setAba("novo")} style={{ color:"#2d5a3d", background:"none", border:"none", cursor:"pointer", textDecoration:"underline" }}>Adicionar</button></div>
            ) : (
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                  <thead><tr style={{ background:"#2d5a3d", color:"#e8dcc8" }}>
                    {["Data","Categoria","Valor","Pago","Descrição",""].map(h=><th key={h} style={{ padding:"7px 9px", textAlign:"left", fontWeight:"normal" }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {lancMes.map((l,i)=>(
                      <tr key={l.id} style={{ background:i%2===0?"#fff":"#f9f7f4", borderBottom:"1px solid #ede8e0" }}>
                        <td style={{ padding:"6px 9px", whiteSpace:"nowrap" }}>{l.data.slice(5).replace("-","/")}</td>
                        <td style={{ padding:"6px 9px" }}><span style={{ padding:"2px 7px", borderRadius:10, fontSize:11, background:l.tipo==="E"?"#d4edda":"#fde8e8", color:l.tipo==="E"?"#155724":"#721c24" }}>{l.categoria}</span></td>
                        <td style={{ padding:"6px 9px", fontWeight:"bold", color:l.tipo==="E"?"#1a7a3a":"#c0392b" }}>{l.tipo==="E"?"+":"-"}{moeda(Number(l.valor))}</td>
                        <td style={{ padding:"6px 9px" }}><button onClick={()=>updLanc(l.id,{pago:!l.pago})} style={{ background:"none", border:"none", cursor:"pointer", fontSize:15 }}>{l.pago?"✅":"⬜"}</button></td>
                        <td style={{ padding:"6px 9px", color:"#666", maxWidth:130, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{l.descricao||"—"}</td>
                        <td style={{ padding:"6px 9px", whiteSpace:"nowrap" }}>
                          <button onClick={()=>{setForm({data:l.data,categoria:l.categoria,valor:String(l.valor),descricao:l.descricao||"",pago:l.pago});setEditId(l.id);setAba("novo");}} style={{ ...s.btnSm, background:"#e8f0fe", color:"#1a3a8f", marginRight:3 }}>✏️</button>
                          {confirmDel===l.id
                            ? <><button onClick={()=>delLanc(l.id)} style={{ ...s.btnSm, background:"#f8d7da", color:"#721c24" }}>✓ Sim</button> <button onClick={()=>setConfirmDel(null)} style={s.btnSm}>✕</button></>
                            : <button onClick={()=>setConfirmDel(l.id)} style={{ ...s.btnSm, background:"#fde8e8", color:"#c0392b" }}>🗑</button>}
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
        {aba==="analise" && (
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:13 }}>
              <button onClick={()=>setMes(m=>(m+11)%12)} style={s.btnSm}>◀</button>
              <span style={{ fontWeight:"bold", fontSize:13, minWidth:120, textAlign:"center" }}>{MESES_FULL[mes]} {ano}</span>
              <button onClick={()=>setMes(m=>(m+1)%12)} style={s.btnSm}>▶</button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:13 }}>
              {[["Saldo Inicial",saldoAnt],["Entradas",miAtual.e],["Saídas",miAtual.s],["Saldo Acumulado",miAtual.acum]].map(([l,v])=>(
                <div key={l} style={{ ...s.card, textAlign:"center" }}>
                  <div style={{ fontSize:11, color:"#888" }}>{l}</div>
                  <div style={{ fontSize:18, fontWeight:"bold", color:v>=0?"#1a7a3a":"#c0392b" }}>{moeda(v)}</div>
                </div>
              ))}
            </div>
            <div style={{ ...s.card, marginBottom:13 }}>
              <div style={{ fontWeight:"bold", color:"#2d5a3d", marginBottom:10, fontSize:13 }}>Por categoria — {MESES_FULL[mes]}</div>
              {porCat.length===0 && <div style={{ color:"#888", fontSize:13 }}>Sem lançamentos.</div>}
              {porCat.map(([cat,{total,tipo}])=>{
                const mx = Math.max(...porCat.map(([,{total}])=>total));
                return <div key={cat} style={{ marginBottom:9 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:2 }}>
                    <span style={{ color:tipo==="E"?"#1a7a3a":"#c0392b" }}>{cat}</span>
                    <span style={{ fontWeight:"bold" }}>{moeda(total)}</span>
                  </div>
                  <div style={{ height:7, background:"#eee", borderRadius:4 }}>
                    <div style={{ height:7, borderRadius:4, width:`${((total/mx)*100).toFixed(1)}%`, background:tipo==="E"?"#27ae60":"#e74c3c" }} />
                  </div>
                </div>;
              })}
            </div>
            <div style={{ ...s.card, overflowX:"auto" }}>
              <div style={{ fontWeight:"bold", color:"#2d5a3d", marginBottom:9, fontSize:13 }}>Visão anual {ano}</div>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead><tr style={{ background:"#2d5a3d", color:"#e8dcc8" }}>
                  {["Mês","Entradas","Saídas","Saldo Op.","Acumulado"].map(h=><th key={h} style={{ padding:"6px 9px", textAlign:"right", fontWeight:"normal" }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {analise.map(({mes:m,e,s:sd,so,acum})=>(
                    <tr key={m} style={{ background:m===mes?"#f0f7f0":m%2===0?"#fff":"#f9f7f4", cursor:"pointer" }} onClick={()=>setMes(m)}>
                      <td style={{ padding:"5px 9px", fontWeight:m===mes?"bold":"normal" }}>{MESES[m]}</td>
                      <td style={{ padding:"5px 9px", textAlign:"right", color:"#1a7a3a" }}>{moeda(e)}</td>
                      <td style={{ padding:"5px 9px", textAlign:"right", color:"#c0392b" }}>{moeda(sd)}</td>
                      <td style={{ padding:"5px 9px", textAlign:"right", fontWeight:"bold", color:so>=0?"#1a7a3a":"#c0392b" }}>{moeda(so)}</td>
                      <td style={{ padding:"5px 9px", textAlign:"right", fontWeight:"bold", color:acum>=0?"#1a7a3a":"#c0392b" }}>{moeda(acum)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── ORÇAMENTO ── */}
        {aba==="orcamento" && (
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
              <button onClick={()=>setMes(m=>(m+11)%12)} style={s.btnSm}>◀</button>
              <span style={{ fontWeight:"bold", fontSize:13, minWidth:120, textAlign:"center" }}>{MESES_FULL[mes]} {ano}</span>
              <button onClick={()=>setMes(m=>(m+1)%12)} style={s.btnSm}>▶</button>
            </div>

            {/* totais projetados vs realizados */}
            {(() => {
              const orcE = orcamentos["__total_entradas__"] || 0;
              const orcS = orcamentos["__total_saidas__"] || 0;
              const realE = miAtual.e;
              const realS = miAtual.s;
              const difE = realE - orcE;
              const difS = realS - orcS;
              return (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
                  {[
                    { label:"Entradas — Orçado vs Realizado", orc:orcE, real:realE, dif:difE, isEntrada:true },
                    { label:"Saídas — Orçado vs Realizado", orc:orcS, real:realS, dif:difS, isEntrada:false },
                  ].map(({label,orc,real,dif,isEntrada})=>{
                    const ok = isEntrada ? dif >= 0 : dif <= 0;
                    return (
                      <div key={label} style={{ ...s.card, borderLeft:`4px solid ${orc===0?"#ccc":ok?"#27ae60":"#e74c3c"}` }}>
                        <div style={{ fontSize:11, color:"#888", marginBottom:6 }}>{label}</div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:4, fontSize:12 }}>
                          <div><div style={{ color:"#aaa", fontSize:10 }}>Orçado</div><div style={{ fontWeight:"bold" }}>{orc>0?moeda(orc):"—"}</div></div>
                          <div><div style={{ color:"#aaa", fontSize:10 }}>Realizado</div><div style={{ fontWeight:"bold" }}>{moeda(real)}</div></div>
                          <div><div style={{ color:"#aaa", fontSize:10 }}>Diferença</div>
                            <div style={{ fontWeight:"bold", color:orc===0?"#888":ok?"#27ae60":"#e74c3c" }}>
                              {orc===0?"—":(dif>=0?"+":"")+moeda(dif)}
                            </div>
                          </div>
                        </div>
                        {orc>0 && <div style={{ marginTop:8 }}>
                          <div style={{ height:6, background:"#eee", borderRadius:4 }}>
                            <div style={{ height:6, borderRadius:4, width:`${Math.min((real/orc)*100,100).toFixed(1)}%`, background:ok?"#27ae60":"#e74c3c" }} />
                          </div>
                          <div style={{ fontSize:10, color:"#888", marginTop:2 }}>{orc>0?((real/orc)*100).toFixed(0):0}% utilizado</div>
                        </div>}
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* por categoria */}
            <div style={{ ...s.card, marginBottom:14 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <div style={{ fontWeight:"bold", color:"#2d5a3d", fontSize:13 }}>Por categoria</div>
                {orcEdit !== null
                  ? <div style={{ display:"flex", gap:6 }}>
                      <button onClick={salvarOrcUI} style={{ ...s.btnVerde, width:"auto", padding:"6px 14px", fontSize:12 }}>💾 Salvar</button>
                      <button onClick={()=>setOrcEdit(null)} style={{ ...s.btnCinza, padding:"6px 10px", fontSize:12 }}>Cancelar</button>
                    </div>
                  : <button onClick={iniciarEditOrc} style={{ ...s.btnCinza, fontSize:12 }}>✏️ Editar orçamentos</button>}
              </div>

              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead><tr style={{ background:"#2d5a3d", color:"#e8dcc8" }}>
                  <th style={{ padding:"7px 9px", fontWeight:"normal", textAlign:"left" }}>Categoria</th>
                  <th style={{ padding:"7px 9px", fontWeight:"normal", textAlign:"right" }}>Orçado</th>
                  <th style={{ padding:"7px 9px", fontWeight:"normal", textAlign:"right" }}>Realizado</th>
                  <th style={{ padding:"7px 9px", fontWeight:"normal", textAlign:"right" }}>Diferença</th>
                  <th style={{ padding:"7px 9px", fontWeight:"normal", textAlign:"left" }}>Barra</th>
                </tr></thead>
                <tbody>
                  {/* categorias com orçamento definido */}
                  {TODAS.filter(cat => orcamentos[cat] || realizadoPorCat[cat]).map((cat,i)=>{
                    const orc = orcamentos[cat] || 0;
                    const real = realizadoPorCat[cat] || 0;
                    const tipo = CE.includes(cat) ? "E" : "S";
                    const dif = tipo==="E" ? real-orc : real-orc;
                    const ok = tipo==="E" ? dif>=0 : dif<=0;
                    const pct = orc>0 ? Math.min((real/orc)*100,100) : 0;
                    if (orc===0 && real===0) return null;
                    return (
                      <tr key={cat} style={{ background:i%2===0?"#fff":"#f9f7f4", borderBottom:"1px solid #ede8e0" }}>
                        <td style={{ padding:"6px 9px" }}>
                          <span style={{ padding:"2px 7px", borderRadius:10, fontSize:11, background:tipo==="E"?"#d4edda":"#fde8e8", color:tipo==="E"?"#155724":"#721c24" }}>{cat}</span>
                        </td>
                        <td style={{ padding:"6px 9px", textAlign:"right" }}>
                          {orcEdit!==null
                            ? <input type="number" min="0" step="0.01" placeholder="0,00"
                                value={orcEdit[cat]||""}
                                onChange={e=>setOrcEdit(prev=>({...prev,[cat]:e.target.value}))}
                                style={{ ...s.inp, width:100, textAlign:"right", padding:"3px 6px" }} />
                            : orc>0 ? moeda(orc) : <span style={{ color:"#ccc" }}>—</span>}
                        </td>
                        <td style={{ padding:"6px 9px", textAlign:"right", fontWeight:"bold", color:tipo==="E"?"#1a7a3a":"#c0392b" }}>{real>0?moeda(real):"—"}</td>
                        <td style={{ padding:"6px 9px", textAlign:"right", fontWeight:"bold", color:orc===0?"#aaa":ok?"#27ae60":"#e74c3c" }}>
                          {orc===0?"—":(dif>=0?"+":"")+moeda(dif)}
                        </td>
                        <td style={{ padding:"6px 9px", minWidth:80 }}>
                          {orc>0 && <div>
                            <div style={{ height:6, background:"#eee", borderRadius:4 }}>
                              <div style={{ height:6, borderRadius:4, width:`${pct.toFixed(1)}%`, background:ok?"#27ae60":"#e74c3c" }} />
                            </div>
                            <div style={{ fontSize:10, color:"#888" }}>{pct.toFixed(0)}%</div>
                          </div>}
                        </td>
                      </tr>
                    );
                  }).filter(Boolean)}
                </tbody>
              </table>

              {/* inputs para orçamento total */}
              {orcEdit !== null && (
                <div style={{ marginTop:16, borderTop:"1px solid #eee", paddingTop:14 }}>
                  <div style={{ fontWeight:"bold", fontSize:12, color:"#2d5a3d", marginBottom:10 }}>Orçamento Total do Mês</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    {[["__total_entradas__","Total de Entradas previstas"],["__total_saidas__","Total de Saídas previstas"]].map(([k,lb])=>(
                      <label key={k} style={s.lbl}>{lb}
                        <input type="number" min="0" step="0.01" placeholder="R$ 0,00"
                          value={orcEdit[k]||""}
                          onChange={e=>setOrcEdit(prev=>({...prev,[k]:e.target.value}))}
                          style={s.inp} />
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── NOVO / EDITAR ── */}
        {aba==="novo" && (
          <div style={{ maxWidth:460 }}>
            <div style={s.card}>
              <div style={{ fontWeight:"bold", fontSize:15, color:"#2d5a3d", marginBottom:14 }}>{editId?"✏️ Editar":"➕ Novo Lançamento"}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <label style={s.lbl}>Data<input type="date" value={form.data} onChange={e=>setForm({...form,data:e.target.value})} style={s.inp} /></label>
                <label style={s.lbl}>Categoria
                  <select value={form.categoria} onChange={e=>setForm({...form,categoria:e.target.value})} style={s.inp}>
                    <option value="">Selecione...</option>
                    <optgroup label="✅ Entradas">{CE.map(c=><option key={c}>{c}</option>)}</optgroup>
                    <optgroup label="❌ Saídas">{CS.map(c=><option key={c}>{c}</option>)}</optgroup>
                  </select>
                </label>
                <label style={s.lbl}>Valor (R$)<input type="number" step="0.01" min="0" placeholder="0,00" value={form.valor} onChange={e=>setForm({...form,valor:e.target.value})} style={s.inp} /></label>
                <label style={s.lbl}>Descrição (opcional)<input type="text" placeholder="Ex: Hapvida, condomínio..." value={form.descricao} onChange={e=>setForm({...form,descricao:e.target.value})} style={s.inp} /></label>
                <label style={{ ...s.lbl, flexDirection:"row", alignItems:"center", gap:8 }}>
                  <input type="checkbox" checked={form.pago} onChange={e=>setForm({...form,pago:e.target.checked})} style={{ width:16, height:16 }} />
                  Já foi pago/recebido
                </label>
                <button onClick={handleSubmit} disabled={!form.categoria||!form.valor||syncing}
                  style={{ ...s.btnVerde, opacity:(!form.categoria||!form.valor||syncing)?0.5:1 }}>
                  {syncing?"Salvando...":editId?"Salvar alterações":"Adicionar lançamento"}
                </button>
                {editId && <button onClick={()=>{setEditId(null);setForm({data:hoje(),categoria:"",valor:"",descricao:"",pago:true});setAba("lancamentos");}} style={s.btnCinza}>Cancelar</button>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const s = {
  card: { background:"#fff", borderRadius:10, padding:14, boxShadow:"0 1px 4px rgba(0,0,0,.08)" },
  abaBtn: { padding:"9px 13px", border:"none", cursor:"pointer", fontSize:12, borderRadius:"7px 7px 0 0", fontFamily:"Georgia,serif" },
  inp: { padding:"8px 10px", border:"1px solid #d4c9b8", borderRadius:6, fontSize:13, fontFamily:"Georgia,serif", width:"100%", background:"#fafaf8" },
  btnVerde: { padding:"10px 18px", background:"#2d5a3d", color:"#fff", border:"none", borderRadius:7, cursor:"pointer", fontSize:13, fontFamily:"Georgia,serif", width:"100%" },
  btnCinza: { padding:"9px 14px", background:"#e8e4dc", color:"#444", border:"none", borderRadius:7, cursor:"pointer", fontSize:13, width:"100%" },
  btnNav: { padding:"4px 9px", background:"rgba(255,255,255,.15)", border:"none", borderRadius:5, cursor:"pointer", color:"#e8dcc8", fontSize:13 },
  btnSm: { padding:"4px 8px", background:"#e8e4dc", border:"none", borderRadius:5, cursor:"pointer", fontSize:12 },
  lbl: { display:"flex", flexDirection:"column", gap:4, fontSize:12, color:"#555" },
};
