import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';
export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  TEMPLATE_SELECT: 'template-select',
  FORM: 'form',
  PREVIEW: 'preview',
  CHECK: 'check',
  MY_RESUMES: 'my-resumes',
  PERSIK: 'persik',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.TEMPLATE_SELECT, `/${DEFAULT_VIEW_PANELS.TEMPLATE_SELECT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.FORM, `/${DEFAULT_VIEW_PANELS.FORM}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PREVIEW, `/${DEFAULT_VIEW_PANELS.PREVIEW}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CHECK, `/${DEFAULT_VIEW_PANELS.CHECK}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MY_RESUMES, `/${DEFAULT_VIEW_PANELS.MY_RESUMES}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());