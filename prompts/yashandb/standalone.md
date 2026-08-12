# YashanDB Standalone Deployment Prompt / 崖山数据库 Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-YashanDB-Community-Edition`（或 `Enterprise-Edition`）中严格按当前交付包 `SKILL.md` 初始化 Standalone 模式，解析并使用通过依赖验证的 Python 3.14+ 与 yaspy。数据库管理员先准备 PDB、表空间、容量和 Schema Owner 权限；数据库 IP、端口、PDB 服务名和凭证通过受控输入提供。完成预检、yaspy 验证和备份证据后，执行 `bash scripts/install_platform.sh initialize --database yashandb --edition <community|enterprise> --config config.json`。Bootstrap Deployment Agent 只执行清单校验后的包内 SQL，不依赖外部 Agent、`yasql` 或 LLM 输出作为部署权限。配置 Web、LLM 与 Embedding 模式后，验证 deployment-check、Dashboard、Portal、配置加密与 `0600` 权限，安全备份 master key，不输出、记录或提交凭证。生产部署还应根据崖山数据库实际高可用与备份架构验证故障转移、恢复流程及 RPO/RTO。

## English

In `AI-Agent-Infra-with-YashanDB-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode with any Python 3.14+ runtime that passes dependency verification and yaspy. Have the database administrator prepare the PDB, tablespaces, capacity, and Schema Owner privileges first. Complete preflight, yaspy verification, and backup evidence, then run `bash scripts/install_platform.sh initialize --database yashandb --edition <community|enterprise> --config config.json`. The Bootstrap Deployment Agent executes only manifest-checked package SQL and never trusts an external Agent, `yasql`, or LLM output as deployment authority. Configure Web, LLM, and the embedding mode, then verify deployment-check, Dashboard, Portal, config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate failover, recovery procedures, and RPO/RTO against the YashanDB HA and backup architecture actually deployed.
