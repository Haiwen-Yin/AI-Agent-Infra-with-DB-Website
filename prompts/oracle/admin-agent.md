# Oracle Admin Agent Deployment Prompt / Oracle Admin Agent 部署提示词

## 中文

按当前 Oracle 交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 初始化 Admin Agent 模式。先完成预检和备份证据，以 `scripts/deploy_oracle.py` 部署基础 Schema，再通过 `scripts/migration_runner.py` 应用 `SKILL.md` 定义的完整 v4.3.3 迁移尾部；禁止只执行某一个历史版本 SQL。配置 Web、LLM 与 Embedding，启动后验证 deployment-check、Dashboard、Portal 和 Production Profile。生成 Admin Token 后通过受控渠道保存，不得写入日志或版本库；同时备份加密 `config.json` 对应的 master key。所有外部或平台内 Agent 都必须注册并认证后才能进入受管范围。生产环境需另行完成 Oracle 数据库高可用、备份与恢复演练。

## English

Follow the delivered Oracle `SKILL.md` and resolve a Python 3.14+ runtime that passes dependency verification to initialize Admin Agent mode. Complete preflight and backup evidence, use `scripts/deploy_oracle.py` for the base schema, then apply the complete v4.3.3 migration tail defined by `SKILL.md` through `scripts/migration_runner.py`; never apply only one historical-version SQL file. Configure Web, LLM, and embedding, then verify deployment-check, Dashboard, Portal, and the Production Profile. Store the generated Admin Token and config master key through controlled channels, never in logs or source control. Every external or platform-hosted Agent must register and authenticate before entering the managed boundary. Validate Oracle database HA, backup, and recovery drills separately for production.
