# PostgreSQL Standalone Deployment Prompt / PostgreSQL Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-PG-Community-Edition`（或 `Enterprise-Edition`）中严格按当前交付包 `SKILL.md` 初始化 Standalone 模式，解析并使用通过依赖验证的 Python 3.14+。准备 PostgreSQL 18.3、pgvector、Apache AGE、pg_trgm、pgcrypto 与 pg_cron；数据库连接必须使用密码或证书认证，不使用 trust。完成预检、扩展检查与备份证据后，执行 `bash scripts/install_platform.sh initialize --database pg --edition <community|enterprise> --config config.json`。包内 Python Bootstrap Deployment Agent 不依赖外部 Agent、`psql` 或 LLM 输出，且只执行清单校验后的 SQL。配置 Web、LLM 与 Embedding 模式后，验证 deployment-check、Dashboard、Portal、配置加密与 `0600` 权限。安全备份 master key，不输出、记录或提交凭证。生产部署还应验证 PostgreSQL 高可用、备份、时间点恢复与 RPO/RTO。

## English

In `AI-Agent-Infra-with-PG-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode with any Python 3.14+ runtime that passes dependency verification. Prepare PostgreSQL 18.3, pgvector, Apache AGE, pg_trgm, pgcrypto, and pg_cron; use password or certificate authentication, never trust authentication. Complete preflight, extension checks, and backup evidence, then run `bash scripts/install_platform.sh initialize --database pg --edition <community|enterprise> --config config.json`. The packaged Python Bootstrap Deployment Agent needs neither an external Agent nor `psql`, executes only manifest-checked SQL, and never trusts LLM output as deployment authority. Configure Web, LLM, and the embedding mode, then verify deployment-check, Dashboard, Portal, config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate PostgreSQL HA, backup, point-in-time recovery, and RPO/RTO.
