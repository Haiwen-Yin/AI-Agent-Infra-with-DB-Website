# YashanDB Admin Agent Deployment Prompt / 崖山数据库 Admin Agent 部署提示词

## 中文

按当前崖山数据库交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 初始化 Admin Agent 模式。完成 yaspy 预检和备份证据，通过 `scripts/deploy_yashandb.py` 部署基础 Schema，再以 `scripts/migration_runner.py` 应用 `SKILL.md` 定义的完整 v4.3.3 迁移尾部；禁止只执行某一个历史版本 SQL。配置 Web、LLM 与 Embedding，验证 deployment-check、Dashboard、Portal 与 Production Profile；通过受控渠道保存 Admin Token 与 master key。所有 Agent 必须注册认证后进入受管范围。生产环境需另行完成崖山数据库高可用、备份与恢复演练。

## English

Follow the delivered YashanDB `SKILL.md` and resolve a Python 3.14+ runtime that passes dependency verification to initialize Admin Agent mode. Complete yaspy preflight and backup evidence, deploy the base schema through `scripts/deploy_yashandb.py`, then apply the complete v4.3.3 migration tail defined by `SKILL.md` with `scripts/migration_runner.py`; never apply only one historical-version SQL file. Configure Web, LLM, and embedding, then verify deployment-check, Dashboard, Portal, and the Production Profile. Secure the Admin Token and master key through controlled channels. Every Agent must register and authenticate before entering the managed boundary. Validate YashanDB HA, backup, and recovery drills separately for production.
