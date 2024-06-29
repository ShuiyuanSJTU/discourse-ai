import DiscourseRoute from "discourse/routes/discourse";

export default class DiscourseAiToolsShowRoute extends DiscourseRoute {
  async model(params) {
    const allTools = this.modelFor("adminPlugins.show.discourse-ai-tools");
    const id = parseInt(params.id, 10);

    return allTools.find((tool) => tool.id === id);
  }

  setupController(controller) {
    super.setupController(...arguments);
    const toolsModel = this.modelFor("adminPlugins.show.discourse-ai-tools");

    controller.set("allTools", toolsModel);
    controller.set("presets", toolsModel.resultSetMeta.presets);
  }
}
