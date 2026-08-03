# PostgreSQL Standalone Deployment Prompt / PostgreSQL Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-PG-Community-Edition`（或 `Enterprise-Edition`）中严格按当前交付包 `SKILL.md` 初始化 Standalone 模式，解析并使用通过依赖验证的 Python 3.14+。准备 PostgreSQL 18.3、pgvector、Apache AGE、pg_trgm、pgcrypto 与 pg_cron；数据库连接必须使用密码或证书认证，不使用 trust。先完成预检、扩展检查与备份证据，通过 `psql` 部署基础 Schema，再使用 `scripts/migration_runner.py` 应用 `SKILL.md` 定义的完整 v4.3.3 迁移尾部；禁止只执行某一个历史版本 SQL。配置 Web、LLM 与 Embedding 后，验证 deployment-check、Dashboard、Portal、配置加密与 `0600` 权限。安全备份 master key，不输出、记录或提交凭证。生产部署还应验证 PostgreSQL 高可用、备份、时间点恢复与 RPO/RTO。

## English

In `AI-Agent-Infra-with-PG-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode with any Python 3.14+ runtime that passes dependency verification. Prepare PostgreSQL 18.3, pgvector, Apache AGE, pg_trgm, pgcrypto, and pg_cron; use password or certificate authentication, never trust authentication. Complete preflight, extension checks, and backup evidence, deploy the base schema through `psql`, then use `scripts/migration_runner.py` for the complete v4.3.3 migration tail defined by `SKILL.md`; never apply only one historical-version SQL file. Configure Web, LLM, and embedding, then verify deployment-check, Dashboard, Portal, config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate PostgreSQL HA, backup, point-in-time recovery, and RPO/RTO.
