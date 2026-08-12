# Oracle Standalone Deployment Prompt / Oracle Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-OracleDB-Community-Edition`（或 `Enterprise-Edition`）目录中，严格按当前交付包的 `SKILL.md` 初始化 Standalone 模式。解析并使用任意可执行且通过依赖验证的 Python 3.14+。由数据库管理员先准备目标 PDB、表空间、配额、组件和 Schema Owner 权限；数据库信息通过受控输入提供，仅在 `SKILL.md` 明确要求时使用 SYS。完成预检和备份证据后，执行 `bash scripts/install_platform.sh initialize --database oracle --edition <community|enterprise> --config config.json`；该 Bootstrap Deployment Agent 仅执行清单校验后的包内 SQL，不依赖外部 Agent、SQLcl、Java 或 LLM 输出作为部署权限。配置 LLM、Embedding 模式和 Web 端口后启动，验证 deployment-check、Dashboard、Portal、AES-256-GCM 配置加密及 `0600` 权限，安全备份 master key。不得输出、记录或提交凭证。生产部署还应根据实际 Oracle 高可用与备份架构验证故障转移、恢复流程及 RPO/RTO。

## English

In `AI-Agent-Infra-with-OracleDB-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode with any executable Python 3.14+ runtime that passes dependency verification. Have the database administrator prepare the target PDB, tablespaces, quotas, components, and Schema Owner privileges first. Complete preflight and backup evidence, then run `bash scripts/install_platform.sh initialize --database oracle --edition <community|enterprise> --config config.json`. The Bootstrap Deployment Agent executes only manifest-checked package SQL and never trusts an external Agent, SQLcl, Java, or LLM output as deployment authority. Configure the LLM, embedding mode, and web port, then verify deployment-check, Dashboard, Portal, AES-256-GCM config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate failover, recovery procedures, and RPO/RTO against the Oracle HA and backup architecture actually deployed.
