# YashanDB Business Agent Deployment Prompt / 崖山数据库 Business Agent 部署提示词

## 中文

按当前崖山数据库交付包 `SKILL.md`，解析并使用通过依赖验证的 Python 3.14+ 执行 `scripts/agent_bootstrap.py register`，将 `AGENT_XXX` 注册到 `http://xxx.xxx.xxx.xxx:xxxx`，注册 Token 通过受控输入提供。注册请求必须携带已授权用户的归属信息。安全保存 `agent_config.json` 与一次性恢复码，执行 `agent_bootstrap.py test` 验证独立 End User 连接；连接或身份异常必须关闭失败，禁止回退 Schema Owner。异常后使用 `agent_bootstrap.py recover` 恢复凭证并从数据库重建受管上下文，不在日志中暴露 Token、恢复码或数据库凭证。

## English

Follow the delivered YashanDB `SKILL.md`, resolve a Python 3.14+ runtime that passes dependency verification, and run `scripts/agent_bootstrap.py register` to register `AGENT_XXX` with `http://xxx.xxx.xxx.xxx:xxxx`, supplying the registration token through controlled input. The request must carry the authorized user ownership. Secure `agent_config.json` and one-time recovery codes, then run `agent_bootstrap.py test` to verify the independent End User connection. Connection or identity failures must fail closed and never fall back to the Schema Owner. After failure, use `agent_bootstrap.py recover` and rebuild managed context from the database without exposing tokens, recovery codes, or database credentials in logs.
