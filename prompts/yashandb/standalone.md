# YashanDB Standalone Deployment Prompt / 崖山数据库 Standalone 部署提示词

## 中文

在 `AI-Agent-Infra-with-YashanDB-Community-Edition`（或 `Enterprise-Edition`）中严格按当前交付包 `SKILL.md` 初始化 Standalone 模式，解析并使用通过依赖验证的 Python 3.14+ 与 `scripts/deploy_yashandb.py`。数据库 IP、端口、PDB 服务名和 Schema Owner 凭证通过受控输入提供。先完成预检、yaspy 验证和备份证据，部署基础 Schema，再通过 `scripts/migration_runner.py` 应用 `SKILL.md` 定义的完整 v4.3.3 迁移尾部；禁止只执行某一个历史版本 SQL。配置 Web、LLM 与 Embedding 后，验证 deployment-check、Dashboard、Portal、配置加密与 `0600` 权限，安全备份 master key，不输出、记录或提交凭证。生产部署还应根据崖山数据库实际高可用与备份架构验证故障转移、恢复流程及 RPO/RTO。

## English

In `AI-Agent-Infra-with-YashanDB-Community-Edition` (or `Enterprise-Edition`), follow the delivered `SKILL.md` to initialize Standalone mode with any Python 3.14+ runtime that passes dependency verification and `scripts/deploy_yashandb.py`. Supply the database host, port, PDB service, and Schema Owner credentials through controlled input. Complete preflight, yaspy verification, and backup evidence, deploy the base schema, then use `scripts/migration_runner.py` for the complete v4.3.3 migration tail defined by `SKILL.md`; never apply only one historical-version SQL file. Configure Web, LLM, and embedding, then verify deployment-check, Dashboard, Portal, config encryption, and `0600` permissions. Back up the master key securely and never print, log, or commit credentials. For production, validate failover, recovery procedures, and RPO/RTO against the YashanDB HA and backup architecture actually deployed.
