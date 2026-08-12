# PostgreSQL Admin Agent Deployment Prompt / PostgreSQL Admin Agent 部署提示词

## 中文

按当前 PostgreSQL 交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 初始化 Admin Agent 模式。使用安全数据库认证，完成扩展预检和备份证据，再执行 `bash scripts/install_platform.sh initialize --database pg --edition <community|enterprise> --config config.json`。包内 Python Bootstrap Deployment Agent 不依赖外部 Agent、`psql` 或 LLM 输出，完成后交接 Platform Admin Agent。配置 Web、LLM 与 Embedding 模式，验证 deployment-check、Dashboard、Portal 与 Production Profile；通过受控渠道保存 Admin Token 与 master key。所有 Agent 必须注册认证后进入受管范围。生产环境需另行完成 PostgreSQL 高可用、备份与恢复演练。

## English

Follow the delivered PostgreSQL `SKILL.md` and resolve a Python 3.14+ runtime that passes dependency verification to initialize Admin Agent mode. Use secure database authentication, complete extension preflight and backup evidence, then run `bash scripts/install_platform.sh initialize --database pg --edition <community|enterprise> --config config.json`. The packaged Python Bootstrap Deployment Agent needs neither an external Agent nor `psql`, and hands off to the Platform Admin Agent after manifest-checked deployment. Configure Web, LLM, and the embedding mode, then verify deployment-check, Dashboard, Portal, and the Production Profile. Secure the Admin Token and master key through controlled channels. Every Agent must register and authenticate before entering the managed boundary. Validate PostgreSQL HA, backup, and recovery drills separately for production.
