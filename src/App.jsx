import { useState, useEffect } from "react";

const LOGO = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAD8APwDACIAAREBAhEB/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMAAAERAhEAPwD36iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooASiiigDA8bX1zpvgfW72zmaK5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pSk213ZxkHws8KQXIm+wSOAciOSd2T6EE8j65rsIokhjWONFRFAVVUYAHoKfiilGEY7Iqria1ZJVJN28xGUMuD0qtpum2ek2SWdhbpBbpkrGgwBkkn9Sat0U9NzJNpWvoYknhTRptfXXHs86kOk3mNx8u3pnHTjpWYnwx8IoAF0ngdAbiT/4qut/Cik4R6o2jiq8FaM2tLb9DLbw9pLaM+jixiTT3GGgjGwHnP8ADg8nn3qBfCWhjw++hixX+zmyTCWY4JOcgk5Bzz14rbop8q7E+3q/zPe+/XuZs2g6XPpK6VJYQGwChVg2AKo7Y9D79c1z9v8AC7wnb3Im+wSSAHISWd2T6EE8j2Oa7KlqXCL3RdPF16d1CbV9xkcaQxrHGioiAKqqMAAdAB6U+iirOdu7uxaKKKACiiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z';

const META_LOJA=800000;
const VL={jan:{total:718214.17,vo:607559.22,sa:110654.95},fev:{total:596109.41,vo:526070.98,sa:70038.43},mar:{total:735215.68,vo:662360.66,sa:72855.02}};
const ORC={jan:{total:4473630.14},fev:{total:3459684.55},mar:{total:3950563.05}};

const TEAM=[
  {id:1,nome:"Ana Maria",ap:"Ana",jan:79163.33,fev:73771.17,mar:159394.47,meta:90000,nivel:"Sênior",un:"VO",av:"👩‍💼",
   ifood:{jan:[{v:500,d:"15/01",t:"mensal"}],fev:[{v:180,d:"05/02",t:"sem"}],mar:[{v:350,d:"18/03",t:"sem"},{v:350,d:"25/03",t:"sem"}]},
   semanas:{mar:[38200,42100,35800,28500,14794]}},
  {id:2,nome:"Antonio Wilson",ap:"Antonio",jan:148059.81,fev:53757.93,mar:93281.30,meta:90000,nivel:"Sênior",un:"VO",av:"👨‍💼",
   ifood:{jan:[],fev:[{v:350,d:"11/02",t:"sem"}],mar:[{v:180,d:"01/03",t:"sem"},{v:350,d:"04/03",t:"sem"},{v:500,d:"16/03",t:"mensal"},{v:180,d:"26/03",t:"sem"}]},
   semanas:{mar:[32400,18900,21000,12500,8481]}},
  {id:3,nome:"Branca",ap:"Branca",jan:25606.58,fev:117354.49,mar:97151.50,meta:90000,nivel:"Sênior",un:"VO",av:"👩‍💼",
   ifood:{jan:[{v:500,d:"16/01",t:"mensal"},{v:180,d:"22/01",t:"sem"},{v:180,d:"29/01",t:"sem"}],fev:[],mar:[{v:180,d:"02/03",t:"sem"},{v:180,d:"19/03",t:"sem"}]},
   semanas:{mar:[22800,19500,24300,18200,12351]}},
  {id:4,nome:"Simone",ap:"Simone",jan:65379.12,fev:103906.01,mar:91099.50,meta:90000,nivel:"Pleno",un:"VO",av:"👩‍💼",
   ifood:{jan:[{v:180,d:"14/01",t:"sem"}],fev:[],mar:[]},semanas:{mar:[18500,22400,19800,17600,12799]}},
  {id:5,nome:"Camila",ap:"Camila",jan:61859.77,fev:109457.57,mar:null,meta:90000,nivel:"Pleno",un:"VO",av:"👩‍💼",marN:"Férias",
   ifood:{jan:[{v:180,d:"15/01",t:"sem"}],fev:[{v:180,d:"04/02",t:"sem"}],mar:[]},semanas:{mar:[]}},
  {id:6,nome:"Duda",ap:"Duda",jan:69678.24,fev:91036.84,mar:101499.33,meta:90000,nivel:"Pleno",un:"VO",av:"👩‍💼",
   ifood:{jan:[],fev:[],mar:[{v:180,d:"11/03",t:"sem"}]},semanas:{mar:[18900,24600,22100,21400,14499]}},
  {id:7,nome:"Keli Cristina",ap:"Keli",jan:70498.92,fev:121205.69,mar:93531.89,meta:90000,nivel:"Pleno",un:"VO",av:"👩‍💼",
   ifood:{jan:[{v:180,d:"21/01",t:"sem"},{v:180,d:"28/01",t:"sem"}],fev:[{v:500,d:"13/02",t:"mensal"}],mar:[]},semanas:{mar:[21200,18700,19800,22300,11531]}},
  {id:8,nome:"Jacira",ap:"Jacira",jan:null,fev:38270.73,mar:55464.62,meta:70000,nivel:"Pleno",un:"SA",av:"👩‍💼",janN:"Férias",
   ifood:{jan:[],fev:[],mar:[]},semanas:{mar:[12800,14200,11500,10800,6164]}},
  {id:9,nome:"Gabriel",ap:"Gabriel",jan:null,fev:29147.56,mar:11167.95,meta:50000,nivel:"Júnior",un:"SA",av:"👨‍💼",
   ifood:{jan:[],fev:[],mar:[]},semanas:{mar:[3200,2800,2400,1800,967]}},
];

const ADMINS=[
  {id:"admin1",nome:"André José",role:"Gerente Comercial",av:"👔"},
  {id:"admin2",nome:"Marlei",role:"Diretora Operacional",av:"👩‍💼"},
  {id:"admin3",nome:"Max",role:"Diretor Estratégico",av:"🧠"},
  {id:"admin4",nome:"Bia",role:"Compras/Financeiro/Dados",av:"📊"},
];

const Ms=["jan","fev","mar"];
const MF={jan:"Janeiro",fev:"Fevereiro",mar:"Março"};
const mono={fontFamily:"'JetBrains Mono',monospace"};
const fmt=v=>v!=null?`R$ ${v.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:0})}`:"—";
const fmtK=v=>v!=null?`R$ ${(v/1000).toFixed(0)}k`:"—";
const fmtD=v=>v!=null?`R$ ${v.toLocaleString("pt-BR",{minimumFractionDigits:2})}`:"—";
const pct=v=>v!=null?`${v.toFixed(1)}%`:"—";
const prem1=(val,meta)=>(val!=null&&meta!=null&&val>=meta)?val*0.01:0;
const ifoodQ1=p=>Ms.reduce((s,m)=>s+(p.ifood[m]||[]).reduce((a,x)=>a+x.v,0),0);
const ifoodMes=(p,m)=>(p.ifood[m]||[]).reduce((s,x)=>s+x.v,0);
const fmtScore=s=>s.toFixed(1);
const RANK_PREMIO=[300,150,100];
const getRankPremio=r=>r>=1&&r<=3?RANK_PREMIO[r-1]:0;

const LVS=[
  {lv:1,nome:"Aprendiz",min:0,max:30,color:"#9ca3af",icon:"🌱"},
  {lv:2,nome:"Vendedor",min:30,max:50,color:"#ea580c",icon:"📦"},
  {lv:3,nome:"Consultor",min:50,max:70,color:"#d97706",icon:"🎯"},
  {lv:4,nome:"Especialista",min:70,max:85,color:"#059669",icon:"⚡"},
  {lv:5,nome:"Corretor Expert",min:85,max:100,color:"#b45309",icon:"👑"},
  {lv:6,nome:"Lenda PS",min:100,max:999,color:"#7c3aed",icon:"💎"},
];
const getLv=s=>LVS.find(l=>s>=l.min&&s<l.max)||LVS[0];

function calcScore(v){
  const vals=Ms.map(m=>v[m]).filter(x=>x!=null);
  if(!vals.length)return{score:0,media:0,pctMeta:0,bateu:0,total:0,cons:0,cresc:0};
  const media=vals.reduce((a,b)=>a+b,0)/vals.length;
  const pctMeta=(media/v.meta)*100;
  const bateu=vals.filter(x=>x>=v.meta).length;
  const cons=vals.length>1?Math.max(0,(1-Math.sqrt(vals.reduce((s,x)=>s+(x-media)**2,0)/vals.length)/media)*100):50;
  const cresc=vals.length>=2?((vals[vals.length-1]-vals[0])/Math.max(vals[0],1))*100:0;
  return{score:parseFloat((pctMeta*0.4+(bateu/vals.length)*100*0.25+cons*0.2+Math.max(0,Math.min(cresc,100))*0.15).toFixed(1)),media,pctMeta,bateu,total:vals.length,cons,cresc};
}

function calcRecup(v,mKey){
  const idx=Ms.indexOf(mKey);if(idx<=0)return null;
  const prev=Ms[idx-1];const vPrev=v[prev];const vCur=v[mKey];
  if(vPrev==null||vPrev>=v.meta)return null;
  const faltou=v.meta-vPrev;const exc=vCur!=null&&vCur>=v.meta?vCur-v.meta:0;
  const ok=exc>=faltou;const gap=Math.max(0,faltou-exc);
  const pRecup=v.meta*0.01;const pMes=ok?(vCur-faltou)*0.01:(vCur!=null&&vCur>=v.meta?vCur*0.01:0);
  return{prev,faltou,exc,ok,gap,vPrev,pRecup,pMes,metaRecup:v.meta+faltou};
}

function enrichTeam(){
  return TEAM.map(v=>{
    const sc=calcScore(v);const lv=getLv(sc.score);
    const recMar=calcRecup(v,"mar");const recFev=calcRecup(v,"fev");
    const ifQ=ifoodQ1(v);
    const p1Adj=Ms.reduce((s,m)=>{
      const rec=m==="mar"?recMar:m==="fev"?recFev:null;
      return s+((rec&&rec.ok)?rec.pMes:prem1(v[m],v.meta));
    },0);
    const recPrem=(recMar&&recMar.ok?recMar.pRecup:0)+(recFev&&recFev.ok?recFev.pRecup:0);
    return{...v,...sc,lv,recMar,recFev,ifQ,p1Adj,recPrem};
  }).sort((a,b)=>b.score-a.score);
}

const card={background:"#fff",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)",marginBottom:10};

// ═══════════════════════════════
// MAIN APP
// ═══════════════════════════════
export default function App(){
  const[role,setRole]=useState(null); // null|"admin"|"vendor"
  const[uid,setUid]=useState(null);
  const[view,setView]=useState("home");
  const[now]=useState(new Date());
  const all=enrichTeam();

  if(!role) return <RoleSelect onAdmin={id=>{setRole("admin");setUid(id);setView("home");}} onVendor={id=>{setRole("vendor");setUid(id);setView("home");}} />;

  const logout=()=>{setRole(null);setUid(null);setView("home");};

  if(role==="admin") return <AdminPanel all={all} uid={uid} logout={logout} now={now} />;
  return <VendorPanel all={all} uid={uid} logout={logout} now={now} />;
}

// ═══════════════════════════════
// LOGIN / ROLE SELECT
// ═══════════════════════════════
function RoleSelect({onAdmin,onVendor}){
  const[mode,setMode]=useState(null);
  return(
    <div style={{fontFamily:"'DM Sans',sans-serif",background:"linear-gradient(180deg,#dc2626 0%,#991b1b 38%,#f0f2f5 38%)",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"32px 20px 20px",maxWidth:480,margin:"0 auto"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <img src={LOGO} alt="PS" style={{height:52,borderRadius:8,marginBottom:8}}/>
      <h2 style={{margin:0,fontSize:16,fontWeight:800,color:"#fff"}}>PS do Vidro</h2>
      <p style={{margin:"2px 0 16px",fontSize:10,color:"rgba(255,255,255,0.6)"}}>Performance Comercial em Tempo Real</p>

      {!mode?(
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:8}}>
          <button onClick={()=>setMode("admin")} style={{width:"100%",padding:"16px",background:"#fff",border:"2px solid #dc2626",borderRadius:12,cursor:"pointer",fontFamily:"'DM Sans'",textAlign:"center",boxShadow:"0 2px 8px rgba(220,38,38,0.1)"}}>
            <span style={{fontSize:24,display:"block",marginBottom:4}}>🔐</span>
            <span style={{fontSize:14,fontWeight:700,color:"#dc2626",display:"block"}}>Administrador</span>
            <span style={{fontSize:10,color:"#6b7280"}}>Visão completa de toda a equipe</span>
          </button>
          <button onClick={()=>setMode("vendor")} style={{width:"100%",padding:"16px",background:"#fff",border:"2px solid #059669",borderRadius:12,cursor:"pointer",fontFamily:"'DM Sans'",textAlign:"center",boxShadow:"0 2px 8px rgba(5,150,105,0.1)"}}>
            <span style={{fontSize:24,display:"block",marginBottom:4}}>👤</span>
            <span style={{fontSize:14,fontWeight:700,color:"#059669",display:"block"}}>Vendedor</span>
            <span style={{fontSize:10,color:"#6b7280"}}>Minha performance e ranking</span>
          </button>
        </div>
      ):mode==="admin"?(
        <div style={{width:"100%"}}>
          <button onClick={()=>setMode(null)} style={{background:"none",border:"none",color:"#dc2626",fontSize:10,cursor:"pointer",marginBottom:8,fontFamily:"'DM Sans'"}}>← Voltar</button>
          <p style={{margin:"0 0 8px",fontSize:12,fontWeight:700,color:"#111"}}>Selecione seu perfil:</p>
          {ADMINS.map(a=>(
            <button key={a.id} onClick={()=>onAdmin(a.id)} style={{width:"100%",padding:"10px 14px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",gap:8,marginBottom:4,fontFamily:"'DM Sans'",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
              <span style={{fontSize:16}}>{a.av}</span>
              <div style={{flex:1,textAlign:"left"}}><p style={{margin:0,fontSize:12,fontWeight:600}}>{a.nome}</p><p style={{margin:0,fontSize:9,color:"#9ca3af"}}>{a.role}</p></div>
              <span style={{color:"#dc2626"}}>→</span>
            </button>
          ))}
        </div>
      ):(
        <div style={{width:"100%"}}>
          <button onClick={()=>setMode(null)} style={{background:"none",border:"none",color:"#059669",fontSize:10,cursor:"pointer",marginBottom:8,fontFamily:"'DM Sans'"}}>← Voltar</button>
          <p style={{margin:"0 0 8px",fontSize:12,fontWeight:700,color:"#111"}}>Selecione seu nome:</p>
          {TEAM.map(v=>(
            <button key={v.id} onClick={()=>onVendor(v.id)} style={{width:"100%",padding:"10px 14px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",gap:8,marginBottom:4,fontFamily:"'DM Sans'",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
              <span style={{fontSize:16}}>{v.av}</span>
              <div style={{flex:1,textAlign:"left"}}><p style={{margin:0,fontSize:12,fontWeight:600}}>{v.nome}</p><p style={{margin:0,fontSize:9,color:"#9ca3af"}}>{v.nivel} · {v.un==="VO"?"Vila Olímpia":"Saúde"}</p></div>
              <span style={{color:"#059669"}}>→</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════
// ADMIN PANEL — VÊ TUDO
// ═══════════════════════════════
function AdminPanel({all,uid,logout,now}){
  const[view,setView]=useState("dash");
  const[sel,setSel]=useState(null);
  const admin=ADMINS.find(a=>a.id===uid);
  const totalQ1=Ms.reduce((s,m)=>s+VL[m].total,0);
  const navs=[{id:"dash",l:"Dashboard",ic:"📊"},{id:"equipe",l:"Equipe",ic:"👥"},{id:"ranking",l:"Ranking",ic:"🏅"},{id:"premio",l:"Premiação",ic:"💰"}];

  return(
    <div style={{fontFamily:"'DM Sans',sans-serif",background:"#f0f2f5",color:"#1f2937",minHeight:"100vh",maxWidth:520,margin:"0 auto",paddingBottom:68}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <style>{`.an{animation:slideUp 0.35s ease-out both}@keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#111827,#1f2937)",padding:"12px 14px 16px",borderRadius:"0 0 16px 16px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}><img src={LOGO} alt="PS" style={{height:26,borderRadius:4}}/><span style={{fontSize:7,color:"rgba(255,255,255,0.4)"}}>{now.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short"})}</span></div>
          <button onClick={logout} style={{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:4,padding:"3px 8px",color:"#fff",fontSize:8,cursor:"pointer"}}>Sair</button>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:22}}>{admin.av}</span>
          <div><p style={{margin:0,fontSize:14,fontWeight:800,color:"#fff"}}>{admin.nome}</p><p style={{margin:0,fontSize:8,color:"rgba(255,255,255,0.5)"}}>{admin.role} · Visão Completa</p></div>
        </div>
      </div>

      <div style={{padding:"10px 12px 0"}}>

      {/* DASHBOARD */}
      {view==="dash"&&(<div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:6,marginBottom:10}}>
          {[
            {l:"Fat. Q1",v:fmtK(totalQ1),c:"#dc2626"},{l:"Média/Mês",v:fmtK(totalQ1/3),c:"#ea580c"},
            {l:"Gap Médio",v:"-"+fmtK(META_LOJA-totalQ1/3),c:"#dc2626"},{l:"Conversão Mar",v:pct((VL.mar.total/ORC.mar.total)*100),c:"#059669"},
          ].map((k,i)=>(
            <div key={i} style={{...card,borderLeft:`3px solid ${k.c}`,padding:"8px 10px",marginBottom:0}}>
              <p style={{margin:0,fontSize:7,color:"#6b7280",textTransform:"uppercase",fontWeight:700}}>{k.l}</p>
              <p style={{margin:"3px 0 0",fontSize:15,fontWeight:800,color:k.c,...mono}}>{k.v}</p>
            </div>
          ))}
        </div>

        {/* Meses */}
        <div style={card}>
          <p style={{margin:"0 0 6px",fontSize:11,fontWeight:700}}>Vendas Loja vs Meta R$ 800k</p>
          {Ms.map(m=>{
            const p=(VL[m].total/META_LOJA)*100;
            return(<div key={m} style={{marginBottom:6}}>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:10,marginBottom:2}}>
                <span style={{fontWeight:600}}>{MF[m]}</span>
                <span style={{...mono,fontWeight:700,color:p>=100?"#059669":"#dc2626"}}>{fmtD(VL[m].total)} ({pct(p)})</span>
              </div>
              <div style={{height:8,background:"#f3f4f6",borderRadius:4,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${Math.min(p,100)}%`,background:p>=100?"#059669":"linear-gradient(90deg,#dc2626,#f97316)",borderRadius:4}}/>
              </div>
            </div>);
          })}
          <p style={{margin:"4px 0 0",fontSize:8,color:"#dc2626"}}>⚠️ Nenhum mês atingiu R$ 800k. André e Bia sem premiação de meta.</p>
        </div>

        {/* Top 3 */}
        <div style={card}>
          <p style={{margin:"0 0 6px",fontSize:11,fontWeight:700}}>🏅 Top 3 Vendedores</p>
          {all.slice(0,3).map((v,i)=>(
            <div key={v.id} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 0",borderBottom:i<2?"1px solid #f3f4f6":"none"}}>
              <span style={{fontSize:14}}>{["🥇","🥈","🥉"][i]}</span>
              <span style={{flex:1,fontSize:11,fontWeight:600}}>{v.ap}</span>
              <span style={{fontSize:12,...mono,fontWeight:700,color:v.lv.color}}>{fmtScore(v.score)}</span>
              <span style={{fontSize:10,...mono,color:"#059669"}}>{fmtD(v.p1Adj+v.recPrem+v.ifQ+getRankPremio(i+1))}</span>
            </div>
          ))}
        </div>

        {/* Alertas */}
        <div style={{...card,background:"#fef2f2",borderColor:"#fecaca"}}>
          <p style={{margin:"0 0 4px",fontSize:11,fontWeight:700,color:"#dc2626"}}>🚨 Alertas</p>
          {all.filter(v=>v.pctMeta<60&&v.total>0).map(v=>(
            <p key={v.id} style={{margin:"2px 0",fontSize:10,color:"#991b1b"}}>• {v.ap}: média {fmtK(v.media)} ({pct(v.pctMeta)} da meta)</p>
          ))}
          {all.filter(v=>v.cresc<-20&&v.total>=2).map(v=>(
            <p key={v.id+"c"} style={{margin:"2px 0",fontSize:10,color:"#991b1b"}}>• {v.ap}: tendência de queda ({pct(v.cresc)})</p>
          ))}
        </div>
      </div>)}

      {/* EQUIPE — detalhe de cada vendedor */}
      {view==="equipe"&&(<div>
        <h3 style={{margin:"0 0 8px",fontSize:13,fontWeight:700}}>👥 Performance Individual</h3>
        {sel===null?all.map((v,i)=>(
          <button key={v.id} onClick={()=>setSel(v.id)} style={{...card,width:"100%",border:"1px solid #e5e7eb",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontFamily:"'DM Sans'",textAlign:"left"}}>
            <span style={{fontSize:12,fontWeight:800,...mono,color:i<3?"#d97706":"#9ca3af"}}>#{i+1}</span>
            <span style={{fontSize:14}}>{v.av}</span>
            <div style={{flex:1}}>
              <p style={{margin:0,fontSize:11,fontWeight:600}}>{v.nome}</p>
              <p style={{margin:0,fontSize:8,color:"#9ca3af"}}>{v.nivel} · Média {fmtK(v.media)} · {v.bateu}/{v.total} metas</p>
            </div>
            <div style={{textAlign:"right"}}>
              <span style={{fontSize:14,...mono,fontWeight:700,color:v.lv.color}}>{fmtScore(v.score)}</span>
              <p style={{margin:0,fontSize:7,color:v.lv.color}}>{v.lv.icon}</p>
            </div>
          </button>
        )):(()=>{
          const v=all.find(x=>x.id===sel);const rank=all.findIndex(x=>x.id===sel)+1;
          return(<div>
            <button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:"#dc2626",fontSize:10,cursor:"pointer",marginBottom:6,fontFamily:"'DM Sans'"}}>← Voltar à equipe</button>
            <div style={{...card,borderLeft:`4px solid ${v.lv.color}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div><p style={{margin:0,fontSize:14,fontWeight:700}}>{v.av} {v.nome}</p><p style={{margin:0,fontSize:9,color:"#6b7280"}}>{v.nivel} · {v.un==="VO"?"Vila Olímpia":"Saúde"} · #{rank}</p></div>
                <div style={{textAlign:"right"}}><span style={{fontSize:22,...mono,fontWeight:800,color:v.lv.color}}>{fmtScore(v.score)}</span><p style={{margin:0,fontSize:7,color:v.lv.color}}>{v.lv.icon} {v.lv.nome}</p></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4,marginBottom:8}}>
                {Ms.map(m=>{
                  const val=v[m];const obs=v[`${m}N`];const bateu=val!=null&&val>=v.meta;
                  return(<div key={m} style={{background:bateu?"#ecfdf5":"#f9fafb",borderRadius:6,padding:"6px",textAlign:"center",border:bateu?"1px solid #a7f3d0":"1px solid #e5e7eb"}}>
                    <p style={{margin:0,fontSize:8,color:"#6b7280"}}>{MF[m]}</p>
                    {obs?<p style={{margin:"2px 0",fontSize:11,color:"#9ca3af"}}>{obs}</p>:
                    val!=null?(<div><p style={{margin:"2px 0",fontSize:13,...mono,fontWeight:700,color:bateu?"#059669":"#dc2626"}}>{fmtD(val)}</p>
                    <p style={{margin:0,fontSize:7,color:bateu?"#059669":"#dc2626"}}>{bateu?"✅":"🔴"} {pct((val/v.meta)*100)}</p></div>):
                    <p style={{margin:"2px 0",color:"#d1d5db"}}>—</p>}
                  </div>);
                })}
              </div>
              {/* Premiação completa */}
              <div style={{fontSize:10,color:"#374151"}}>
                {[
                  {l:"1% Meta (ajust.)",v:fmtD(v.p1Adj),c:v.p1Adj>0?"#059669":"#d1d5db"},
                  {l:"Recuperação",v:fmtD(v.recPrem),c:v.recPrem>0?"#7c3aed":"#d1d5db"},
                  {l:"iFood Q1",v:fmtD(v.ifQ),c:v.ifQ>0?"#d97706":"#d1d5db"},
                  {l:"Ranking #"+rank,v:fmtD(getRankPremio(rank)),c:getRankPremio(rank)>0?"#b45309":"#d1d5db"},
                  {l:"TOTAL",v:fmtD(v.p1Adj+v.recPrem+v.ifQ+getRankPremio(rank)),c:"#111",bold:true},
                ].map((r,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:i<4?"1px solid #f3f4f6":"none"}}>
                    <span style={{color:"#6b7280"}}>{r.l}</span>
                    <span style={{...mono,fontWeight:r.bold?700:600,color:r.c}}>{r.v}</span>
                  </div>
                ))}
              </div>
              {v.recMar&&(<div style={{marginTop:8,padding:"6px 8px",borderRadius:6,background:"#faf5ff",border:"1px solid #e9d5ff",fontSize:9,color:"#7c3aed"}}>
                🔄 Recuperação {MF[v.recMar.prev]}: faltou {fmtD(v.recMar.faltou)} · Excedente Mar: {fmtD(v.recMar.exc)} · {v.recMar.ok?"✅ RECUPEROU (+"+fmtD(v.recMar.pRecup)+")":"🔴 Falta "+fmtD(v.recMar.gap)}
              </div>)}
            </div>
          </div>);
        })()}
      </div>)}

      {/* RANKING ADMIN — vê tudo */}
      {view==="ranking"&&(<div>
        <h3 style={{margin:"0 0 4px",fontSize:13,fontWeight:700}}>🏅 Ranking Completo</h3>
        <div className="an" style={{...card,background:"#fffbeb",borderColor:"#fde68a",padding:"6px 10px",display:"flex",justifyContent:"center",gap:12,fontSize:10,fontWeight:700,color:"#92400e"}}>
          <span>🥇 R$ 300</span><span>🥈 R$ 150</span><span>🥉 R$ 100</span>
        </div>
        {all.map((v,i)=>{
          const rP=getRankPremio(i+1);const totalGanho=v.p1Adj+v.recPrem+v.ifQ+rP;
          return(
            <div key={v.id} className="an" style={{...card,border:i<3?"1px solid #fde68a":"1px solid #e5e7eb",background:i<3?"linear-gradient(135deg,#fffbeb,#fff)":"#fff",animationDelay:`${i*0.04}s`}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <span style={{fontSize:i<3?14:10,fontWeight:800,...mono,minWidth:22,textAlign:"center"}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":`#${i+1}`}</span>
                <span style={{fontSize:14}}>{v.av}</span>
                <div style={{flex:1}}><p style={{margin:0,fontSize:11,fontWeight:600}}>{v.ap}</p><p style={{margin:0,fontSize:8,color:"#9ca3af"}}>{v.nivel} · Média {fmtK(v.media)}</p></div>
                <div style={{textAlign:"right"}}><div style={{fontSize:16,...mono,fontWeight:800,color:v.lv.color}}>{fmtScore(v.score)}</div><div style={{fontSize:7,color:v.lv.color}}>{v.lv.icon} Lv{v.lv.lv}</div></div>
              </div>
              <div style={{marginTop:4,display:"flex",gap:4,fontSize:8,color:"#6b7280",flexWrap:"wrap"}}>
                <span>💰 {fmtD(v.p1Adj)}</span>
                {v.recPrem>0&&<span style={{color:"#7c3aed"}}>🔄 {fmtD(v.recPrem)}</span>}
                <span>🍕 {fmtD(v.ifQ)}</span>
                {rP>0&&<span style={{color:"#d97706"}}>🏅 {fmtD(rP)}</span>}
                <span style={{fontWeight:700,color:"#111"}}>= {fmtD(totalGanho)}</span>
              </div>
            </div>
          );
        })}
      </div>)}

      {/* PREMIAÇÃO ADMIN */}
      {view==="premio"&&(<div>
        <h3 style={{margin:"0 0 8px",fontSize:13,fontWeight:700}}>💰 Premiação Q1 — Visão Geral</h3>
        <div style={card}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
            <thead><tr style={{borderBottom:"2px solid #e5e7eb",background:"#f9fafb"}}>
              {["Vendedor","1%","Recup.","iFood","Rank","Total"].map(h=><th key={h} style={{padding:"5px 4px",textAlign:"left",fontSize:8,color:"#6b7280",fontWeight:700,textTransform:"uppercase"}}>{h}</th>)}
            </tr></thead>
            <tbody>
              {all.map((v,i)=>{const rP=getRankPremio(i+1);const t=v.p1Adj+v.recPrem+v.ifQ+rP;return(
                <tr key={v.id} style={{borderBottom:"1px solid #f3f4f6"}}>
                  <td style={{padding:"4px",fontWeight:600}}>{v.ap}</td>
                  <td style={{padding:"4px",...mono,color:v.p1Adj>0?"#059669":"#d1d5db"}}>{v.p1Adj>0?fmtD(v.p1Adj):"—"}</td>
                  <td style={{padding:"4px",...mono,color:v.recPrem>0?"#7c3aed":"#d1d5db"}}>{v.recPrem>0?fmtD(v.recPrem):"—"}</td>
                  <td style={{padding:"4px",...mono,color:v.ifQ>0?"#d97706":"#d1d5db"}}>{v.ifQ>0?fmtD(v.ifQ):"—"}</td>
                  <td style={{padding:"4px",...mono,color:rP>0?"#b45309":"#d1d5db"}}>{rP>0?fmtD(rP):"—"}</td>
                  <td style={{padding:"4px",...mono,fontWeight:700,color:t>0?"#111":"#d1d5db"}}>{t>0?fmtD(t):"—"}</td>
                </tr>
              );})}
              <tr style={{borderTop:"2px solid #e5e7eb",background:"#f9fafb"}}>
                <td style={{padding:"4px",fontWeight:700}}>TOTAL</td>
                {[
                  all.reduce((s,v)=>s+v.p1Adj,0),
                  all.reduce((s,v)=>s+v.recPrem,0),
                  all.reduce((s,v)=>s+v.ifQ,0),
                  RANK_PREMIO.reduce((a,b)=>a+b,0),
                ].map((t,j)=><td key={j} style={{padding:"4px",...mono,fontWeight:700,color:t>0?"#111":"#d1d5db"}}>{fmtD(t)}</td>)}
                <td style={{padding:"4px",...mono,fontWeight:700,color:"#dc2626"}}>{fmtD(all.reduce((s,v,i)=>s+v.p1Adj+v.recPrem+v.ifQ+getRankPremio(i+1),0))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>)}

      </div>
      {/* NAV */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:520,background:"#111827",display:"flex",padding:"4px 0 8px"}}>
        {navs.map(n=>(<button key={n.id} onClick={()=>{setView(n.id);setSel(null);}} style={{flex:1,background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
          <span style={{fontSize:15}}>{n.ic}</span>
          <span style={{fontSize:7,fontWeight:view===n.id?700:400,color:view===n.id?"#fbbf24":"rgba(255,255,255,0.4)"}}>{n.l}</span>
        </button>))}
      </div>
    </div>
  );
}

// ═══════════════════════════════
// VENDOR PANEL — VÊ SÓ O PRÓPRIO
// ═══════════════════════════════
function VendorPanel({all,uid,logout,now}){
  const[view,setView]=useState("home");
  const me=TEAM.find(t=>t.id===uid);
  const my=all.find(v=>v.id===uid);
  const rank=all.findIndex(v=>v.id===uid)+1;
  const myRankP=getRankPremio(rank);
  const myTotalQ1=my.p1Adj+my.recPrem+my.ifQ+myRankP;
  const recup=my.recMar;

  const mesAtual=me.mar;
  const bateuMeta=mesAtual!=null&&mesAtual>=me.meta;
  const gapMeta=mesAtual!=null?Math.max(0,me.meta-mesAtual):me.meta;
  const diasR=4;const metaDia=diasR>0?gapMeta/diasR:0;

  const sems=me.semanas?.mar||[];
  const semAtual=sems.length>0?sems[sems.length-1]:0;

  const navs=[{id:"home",l:"Painel",ic:"📊"},{id:"ranking",l:"Ranking",ic:"🏅"},{id:"ganhos",l:"Ganhos",ic:"💰"}];

  return(
    <div style={{fontFamily:"'DM Sans',sans-serif",background:"#f0f2f5",color:"#1f2937",minHeight:"100vh",maxWidth:480,margin:"0 auto",paddingBottom:68}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <style>{`.an{animation:slideUp 0.35s ease-out both}@keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes pulseGlow{0%,100%{box-shadow:0 0 4px rgba(5,150,105,0.15)}50%{box-shadow:0 0 12px rgba(5,150,105,0.35)}}.pg{animation:pulseGlow 2s infinite}`}</style>

      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#059669,#047857)",padding:"12px 14px 16px",borderRadius:"0 0 16px 16px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}><img src={LOGO} alt="PS" style={{height:26,borderRadius:4,opacity:0.9}}/><span style={{fontSize:7,color:"rgba(255,255,255,0.4)"}}>{now.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short"})}</span></div>
          <button onClick={logout} style={{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:4,padding:"3px 8px",color:"#fff",fontSize:8,cursor:"pointer"}}>Sair</button>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:38,height:38,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{me.av}</div>
          <div style={{flex:1}}><p style={{margin:0,fontSize:14,fontWeight:800,color:"#fff"}}>{me.ap}</p><p style={{margin:0,fontSize:8,color:"rgba(255,255,255,0.6)"}}>{me.nivel} · {me.un==="VO"?"Vila Olímpia":"Saúde"}</p></div>
          <div className="pg" style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"5px 10px",textAlign:"center"}}>
            <div style={{fontSize:22,fontWeight:800,...mono,color:"#fff",lineHeight:1}}>#{rank}</div>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.7)"}}>{my.lv.icon} {fmtScore(my.score)}</div>
          </div>
        </div>
      </div>

      <div style={{padding:"10px 12px 0"}}>

      {/* HOME */}
      {view==="home"&&(<div>
        {/* Meta do mês */}
        <div className="an" style={{...card,border:bateuMeta?"2px solid #059669":"2px solid #ea580c",background:bateuMeta?"linear-gradient(135deg,#ecfdf5,#fff)":"#fff",padding:"14px 16px"}}>
          <p style={{margin:0,fontSize:9,color:"#6b7280",fontWeight:600,textTransform:"uppercase"}}>Meta do Mês — Março</p>
          <p style={{margin:"2px 0 0",fontSize:22,fontWeight:800,...mono,color:bateuMeta?"#059669":"#111"}}>{mesAtual!=null?fmtD(mesAtual):(me.marN||"—")}</p>
          {mesAtual!=null&&(<div>
            <div style={{height:8,background:"#e5e7eb",borderRadius:4,overflow:"hidden",margin:"6px 0"}}>
              <div style={{height:"100%",width:`${Math.min((mesAtual/me.meta)*100,100)}%`,background:bateuMeta?"#059669":"linear-gradient(90deg,#ea580c,#f97316)",borderRadius:4}}/>
            </div>
            {!bateuMeta?(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
              <div style={{background:"rgba(220,38,38,0.05)",borderRadius:6,padding:"5px",textAlign:"center"}}><p style={{margin:0,fontSize:7,color:"#dc2626"}}>FALTA</p><p style={{margin:"1px 0",fontSize:14,...mono,fontWeight:800,color:"#dc2626"}}>{fmtD(gapMeta)}</p></div>
              <div style={{background:"rgba(37,99,235,0.05)",borderRadius:6,padding:"5px",textAlign:"center"}}><p style={{margin:0,fontSize:7,color:"#2563eb"}}>META/DIA ({diasR}d)</p><p style={{margin:"1px 0",fontSize:14,...mono,fontWeight:800,color:"#2563eb"}}>{fmtD(metaDia)}</p></div>
            </div>):(<p style={{margin:0,fontSize:11,fontWeight:700,color:"#059669",textAlign:"center"}}>🎉 META BATIDA! Prêmio: {fmtD(my.p1Adj)}</p>)}
          </div>)}
        </div>

        {/* Recuperação */}
        {recup&&(
          <div className="an" style={{...card,animationDelay:"0.05s",border:"1px solid #e9d5ff",background:"#faf5ff"}}>
            <p style={{margin:0,fontSize:9,color:"#7c3aed",fontWeight:700}}>🔄 Recuperação — {MF[recup.prev]}</p>
            <p style={{margin:"3px 0",fontSize:10,color:"#374151"}}>Faltaram <strong style={{...mono,color:"#dc2626"}}>{fmtD(recup.faltou)}</strong> em {MF[recup.prev]}. {recup.ok?`Excedente de ${fmtD(recup.exc)} cobriu!`:`Faltam ${fmtD(recup.gap)} de excedente.`}</p>
            {recup.ok?<p style={{margin:0,fontSize:11,fontWeight:700,color:"#059669"}}>✅ Recuperou! +{fmtD(recup.pRecup)}</p>:
            <p style={{margin:0,fontSize:9,color:"#7c3aed"}}>💜 Se cobrir, ganha +{fmtD(recup.pRecup)}</p>}
          </div>
        )}

        {/* Semana iFood */}
        {semAtual>0&&(
          <div className="an" style={{...card,animationDelay:"0.1s",border:"1px solid #fde68a",background:"#fffbeb"}}>
            <p style={{margin:0,fontSize:9,color:"#92400e",fontWeight:700}}>🍕 Semana {sems.length}: {fmtD(semAtual)}</p>
            {[{t:30000,p:"R$ 180"},{t:50000,p:"R$ 350"}].map((x,i)=>(
              <div key={i} style={{marginTop:4}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:8,marginBottom:1}}>
                  <span>{semAtual>=x.t?"✅":"⬜"} {fmtK(x.t)} → {x.p}</span>
                  <span style={{...mono,fontWeight:600,color:semAtual>=x.t?"#059669":"#dc2626"}}>{semAtual>=x.t?"GANHOU!":"-"+fmtD(x.t-semAtual)}</span>
                </div>
                <div style={{height:5,background:"#e5e7eb",borderRadius:3,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${Math.min((semAtual/x.t)*100,100)}%`,background:semAtual>=x.t?"#059669":"#d97706",borderRadius:3}}/>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Meta da loja */}
        <div className="an" style={{...card,animationDelay:"0.2s"}}>
          <p style={{margin:"0 0 3px",fontSize:10,fontWeight:700}}>🏪 Meta da Loja — Março</p>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <div style={{flex:1,height:7,background:"#f3f4f6",borderRadius:3,overflow:"hidden"}}><div style={{height:"100%",width:`${Math.min((VL.mar.total/META_LOJA)*100,100)}%`,background:"linear-gradient(90deg,#dc2626,#f97316)",borderRadius:3}}/></div>
            <span style={{fontSize:10,...mono,fontWeight:700,color:"#dc2626"}}>{pct((VL.mar.total/META_LOJA)*100)}</span>
          </div>
          <p style={{margin:"2px 0 0",fontSize:8,color:"#7c3aed"}}>🎉 R$ 800k = R$ 200 iFood pra todos!</p>
        </div>
      </div>)}

      {/* RANKING — vê posição mas NÃO vê ganhos dos outros */}
      {view==="ranking"&&(<div>
        <h3 style={{margin:"0 0 4px",fontSize:13,fontWeight:700}}>🏅 Ranking da Equipe</h3>
        <div className="an" style={{...card,background:"#fffbeb",borderColor:"#fde68a",padding:"6px 10px",display:"flex",justifyContent:"center",gap:12,fontSize:10,fontWeight:700,color:"#92400e"}}>
          <span>🥇 R$ 300</span><span>🥈 R$ 150</span><span>🥉 R$ 100</span>
        </div>
        {all.map((v,i)=>{
          const isMe=v.id===uid;
          return(
            <div key={v.id} className="an" style={{...card,border:isMe?"2px solid #059669":i<3?"1px solid #fde68a":"1px solid #e5e7eb",background:isMe?"linear-gradient(135deg,#ecfdf5,#fff)":i<3?"linear-gradient(135deg,#fffbeb,#fff)":"#fff",animationDelay:`${i*0.04}s`}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <span style={{fontSize:i<3?14:10,fontWeight:800,...mono,minWidth:22,textAlign:"center"}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":`#${i+1}`}</span>
                <div style={{width:28,height:28,borderRadius:"50%",background:isMe?"#d1fae5":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>{v.av}</div>
                <div style={{flex:1}}>
                  <p style={{margin:0,fontSize:11,fontWeight:isMe?800:600,color:isMe?"#059669":"#111"}}>{v.ap}{isMe?" ← Você":""}</p>
                  <p style={{margin:0,fontSize:8,color:"#9ca3af"}}>{v.nivel} · {v.bateu}/{v.total} metas</p>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:16,...mono,fontWeight:800,color:v.lv.color}}>{fmtScore(v.score)}</div>
                  <div style={{fontSize:7,color:v.lv.color}}>{v.lv.icon} Lv{v.lv.lv}</div>
                </div>
              </div>
              {/* Só mostra ganhos se for o próprio */}
              {isMe&&(
                <div style={{marginTop:4,display:"flex",gap:4,fontSize:8,color:"#059669",fontWeight:600}}>
                  <span>💰 {fmtD(my.p1Adj)}</span>
                  {my.recPrem>0&&<span style={{color:"#7c3aed"}}>🔄 {fmtD(my.recPrem)}</span>}
                  <span style={{color:"#d97706"}}>🍕 {fmtD(my.ifQ)}</span>
                  {myRankP>0&&<span>🏅 {fmtD(myRankP)}</span>}
                  <span style={{color:"#111",fontWeight:700}}>= {fmtD(myTotalQ1)}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>)}

      {/* GANHOS — só os próprios */}
      {view==="ganhos"&&(<div>
        <h3 style={{margin:"0 0 8px",fontSize:13,fontWeight:700}}>💰 Seus Ganhos Q1/2026</h3>
        <div className="an" style={{...card,background:"linear-gradient(135deg,#ecfdf5,#fffbeb)",border:"1px solid #a7f3d0",textAlign:"center",padding:14}}>
          <p style={{margin:0,fontSize:9,color:"#6b7280"}}>Total Ganho no Trimestre</p>
          <p style={{margin:"4px 0",fontSize:26,...mono,fontWeight:800,color:"#059669"}}>{fmtD(myTotalQ1)}</p>
          <div style={{display:"flex",justifyContent:"center",gap:6,fontSize:9,flexWrap:"wrap"}}>
            <span style={{color:"#059669"}}>💰 {fmtD(my.p1Adj)}</span>
            {my.recPrem>0&&<span style={{color:"#7c3aed"}}>🔄 {fmtD(my.recPrem)}</span>}
            <span style={{color:"#d97706"}}>🍕 {fmtD(my.ifQ)}</span>
            {myRankP>0&&<span style={{color:"#b45309"}}>🏅 {fmtD(myRankP)}</span>}
          </div>
        </div>
        {Ms.map((m,mi)=>{
          const val=me[m];const obs=me[`${m}N`];
          const recM=m==="mar"?my.recMar:m==="fev"?my.recFev:null;
          const p1=(recM&&recM.ok)?recM.pMes:prem1(val,me.meta);
          const rP=(recM&&recM.ok)?recM.pRecup:0;
          const ifV=ifoodMes(me,m);const total=p1+rP+ifV;
          return(<div key={m} className="an" style={{...card,animationDelay:`${mi*0.08}s`}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
              <span style={{fontSize:10,fontWeight:700}}>{MF[m]}</span>
              <span style={{fontSize:12,...mono,fontWeight:800,color:total>0?"#059669":"#d1d5db"}}>{total>0?fmtD(total):"—"}</span>
            </div>
            <div style={{display:"flex",gap:3}}>
              <div style={{flex:1,background:"#ecfdf5",borderRadius:5,padding:"4px 5px",textAlign:"center"}}>
                <p style={{margin:0,fontSize:7,color:"#6b7280"}}>1% Meta</p>
                <p style={{margin:"1px 0",fontSize:10,...mono,fontWeight:700,color:p1>0?"#059669":"#d1d5db"}}>{p1>0?fmtD(p1):"—"}</p>
              </div>
              {rP>0&&<div style={{flex:1,background:"#faf5ff",borderRadius:5,padding:"4px 5px",textAlign:"center",border:"1px solid #e9d5ff"}}>
                <p style={{margin:0,fontSize:7,color:"#7c3aed"}}>🔄 Recup</p>
                <p style={{margin:"1px 0",fontSize:10,...mono,fontWeight:700,color:"#7c3aed"}}>{fmtD(rP)}</p>
              </div>}
              <div style={{flex:1,background:"#fffbeb",borderRadius:5,padding:"4px 5px",textAlign:"center"}}>
                <p style={{margin:0,fontSize:7,color:"#6b7280"}}>🍕 iFood</p>
                <p style={{margin:"1px 0",fontSize:10,...mono,fontWeight:700,color:ifV>0?"#d97706":"#d1d5db"}}>{ifV>0?fmtD(ifV):"—"}</p>
              </div>
            </div>
          </div>);
        })}
        <div className="an" style={{...card,animationDelay:"0.3s"}}>
          <p style={{margin:"0 0 4px",fontSize:10,fontWeight:700}}>🏅 Bônus</p>
          {[
            {l:"Ranking #"+rank,v:fmtD(myRankP),ok:myRankP>0},
            {l:"3 meses consecutivos",v:"R$ 1.500,00",ok:my.bateu===3&&my.total===3},
            {l:"Média ≥ R$ 120k",v:"R$ 2.000,00",ok:my.media>=120000},
          ].map((x,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:i<2?"1px solid #f3f4f6":"none",fontSize:10}}>
              <span style={{color:x.ok?"#059669":"#6b7280"}}>{x.ok?"✅":"⬜"} {x.l}</span>
              <span style={{...mono,fontWeight:700,color:x.ok?"#059669":"#d1d5db"}}>{x.v}</span>
            </div>
          ))}
        </div>
      </div>)}

      </div>
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:"#fff",borderTop:"1px solid #e5e7eb",display:"flex",padding:"4px 0 8px",boxShadow:"0 -2px 8px rgba(0,0,0,0.04)"}}>
        {navs.map(n=>(<button key={n.id} onClick={()=>setView(n.id)} style={{flex:1,background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
          <span style={{fontSize:15}}>{n.ic}</span>
          <span style={{fontSize:7,fontWeight:view===n.id?700:400,color:view===n.id?"#059669":"#9ca3af"}}>{n.l}</span>
        </button>))}
      </div>
    </div>
  );
}
