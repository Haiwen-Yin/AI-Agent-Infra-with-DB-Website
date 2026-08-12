# YashanDB Admin Agent Deployment Prompt / 崖山数据库 Admin Agent 部署提示词

## 中文

按当前崖山数据库交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 初始化 Admin Agent 模式。由数据库管理员完成 PDB、表空间、权限、yaspy 预检和备份证据，再执行 `bash scripts/install_platform.sh initialize --database yashandb --edition <community|enterprise> --config config.json`。Bootstrap Deployment Agent 只执行包内清单校验后的 SQL，不依赖外部 Agent 或 LLM 输出作为部署权限；完成后交接 Platform Admin Agent。配置 Web、LLM 与 Embedding 模式，验证 deployment-check、Dashboard、Portal 与 Production Profile；通过受控渠道保存 Admin Token 与 master key。所有 Agent 必须注册认证后进入受管范围。生产环境需另行完成崖山数据库高可用、备份与恢复演练。

## English

Follow the delivered YashanDB `SKILL.md` and resolve a Python 3.14+ runtime that passes dependency verification to initialize Admin Agent mode. Have the database administrator complete PDB, tablespace, privilege, yaspy preflight, and backup preparation, then run `bash scripts/install_platform.sh initialize --database yashandb --edition <community|enterprise> --config config.json`. The Bootstrap Deployment Agent executes only manifest-checked package SQL, never trusts an external Agent or LLM output as deployment authority, and hands off to the Platform Admin Agent. Configure Web, LLM, and the embedding mode, then verify deployment-check, Dashboard, Portal, and the Production Profile. Secure the Admin Token and master key through controlled channels. Every Agent must register and authenticate before entering the managed boundary. Validate YashanDB HA, backup, and recovery drills separately for production.
