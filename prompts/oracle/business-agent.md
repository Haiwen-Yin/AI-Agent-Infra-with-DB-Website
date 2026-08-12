# Oracle Business Agent Deployment Prompt / Oracle Business Agent 部署提示词

## 中文

按当前 Oracle 交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 执行 `scripts/agent_bootstrap.py register`，将 `AGENT_XXX`（名称 `XXX Agent`）注册到 `http://xxx.xxx.xxx.xxx:xxxx`，注册 Token 通过受控输入提供。注册请求必须携带已授权用户的归属信息，不得由 Agent 自行扩大归属或权限。安全保存生成的 `agent_config.json` 与一次性恢复码，执行 `agent_bootstrap.py test` 验证独立 End User 数据库连接；连接异常或身份不匹配必须关闭失败，禁止回退到 Schema Owner。Agent 进程或节点异常后，使用 `agent_bootstrap.py recover` 恢复凭证，再从数据库重建受管上下文。不得在日志、工单或版本库中暴露 Token、恢复码或数据库凭证。

## English

Follow the delivered Oracle `SKILL.md`, resolve a Python 3.14+ runtime that passes dependency verification, and run `scripts/agent_bootstrap.py register` to register `AGENT_XXX` (`XXX Agent`) with `http://xxx.xxx.xxx.xxx:xxxx`, supplying the registration token through controlled input. The request must carry the authorized user ownership and must not let the Agent enlarge its own ownership or authority. Secure the generated `agent_config.json` and one-time recovery codes, then run `agent_bootstrap.py test` to verify the independent End User database connection. Connection or identity failures must fail closed and never fall back to the Schema Owner. After failure, use `agent_bootstrap.py recover` and rebuild managed context from the database. Never expose tokens, recovery codes, or database credentials in logs, tickets, or source control.
