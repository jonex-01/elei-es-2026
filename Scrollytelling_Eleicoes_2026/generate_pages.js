// O comando anterior agora gera 13 perfis estáticos documentados.
import('./generate_candidates.mjs').catch(error=>{console.error(error);process.exitCode=1;});
