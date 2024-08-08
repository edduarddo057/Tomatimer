## Padronizações

### Nome de Branches
- **`feat-*`**: Branches de feature se ramificam do branch `main` e devem ser nomeados descritivamente, refletindo claramente o recurso que está sendo implementado. Exemplos: `feat-login-page`, `feat-user-authentication`.
- **`fix-*`**: Branches de fix são criados para abordar problemas específicos e também se ramificam do `main`. Eles devem ser nomeados descritivamente para refletir o problema que está sendo resolvido. Exemplos: `fix-button-bug`, `fix-typo-in-readme`.

### Nome de Commits
Sempre utilize o formato `[ação]: descrição resumida`, onde a ação representa a mudança realizada, como "add", "update", "delete", etc., e a descrição fornece um resumo conciso da alteração. Exemplos: 
- `[add]: implementação da página de login`
- `[update]: ajuste no estilo do botão`
- `[delete]: remoção de código morto`

### Fluxo de Desenvolvimento
1. **Criar uma Branch**:
   - Ramifique-se a partir do `main` utilizando a nomenclatura adequada (`feat-*` ou `fix-*`).
2. **Realizar Alterações**:
   - Faça as mudanças necessárias no código.
   - Realize commits frequentes e descritivos seguindo o padrão `[ação]: descrição resumida`.
3. **Abrir Pull Request (PR)**:
   - Ao finalizar a implementação, abra um Pull Request para a `main`.
   - Forneça uma descrição detalhada das alterações realizadas.
   - Inclua instruções claras sobre como revisar e testar as mudanças.
   - Adicione os revisores necessários.
4. **Revisão e Merge**:
   - Após a revisão e aprovação do PR, faça o merge das alterações para a `main`.
   - Exclua a branch que foi usada para a implementação ou correção.