# Oracle Standalone Deployment Prompt / Oracle Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-OracleDB-Community-Edition`（或 `Enterprise-Edition`）目录中，严格按当前交付包的 `SKILL.md` 初始化 Standalone 模式。解析并使用任意可执行且通过依赖验证的 Python 3.14+；使用纯 Python `scripts/deploy_oracle.py`，无需 SQLcl 或 Java。数据库信息：IP `xxx.xxx.xxx.xxx`，端口 `xxxx`，服务名 `xxxxxx`，Schema Owner 用户名/密码通过受控输入提供；仅在 `SKILL.md` 明确要求时使用 SYS。先完成预检和备份证据，再部署基础 Schema，并通过 `scripts/migration_runner.py` 应用 `SKILL.md` 定义的完整 v4.3.3 迁移尾部；禁止只执行某一个历史版本 SQL。配置 LLM、Embedding 和 Web 端口后启动，验证 deployment-check、Dashboard、Portal、AES-256-GCM 配置加密及 `0600` 权限，安全备份 master key。不得输出、记录或提交凭证。生产部署还应根据 Oracle 实际高可用与备份架构验证故障转移、恢复流程及 RPO/RTO。

## English

In `AI-Agent-Infra-with-OracleDB-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode. Resolve any executable Python 3.14+ runtime that passes dependency verification and use the pure-Python `scripts/deploy_oracle.py`; SQLcl and Java are not required. Provide the database host, port, service, and Schema Owner credentials through controlled input, using SYS only when `SKILL.md` explicitly requires it. Complete preflight and backup evidence, deploy the base schema, then use `scripts/migration_runner.py` for the complete v4.3.3 migration tail defined by `SKILL.md`; never apply only one historical-version SQL file. Configure LLM, embedding, and the web port, then verify deployment-check, Dashboard, Portal, AES-256-GCM config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate failover, recovery procedures, and RPO/RTO against the Oracle HA and backup architecture actually deployed.
