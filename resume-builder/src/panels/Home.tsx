import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Div,
  NavIdProps,
  Card,
  CardGrid,
  Text,
  SimpleCell,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();

  const recommendations = [
    "Указывайте только актуальную информацию",
    "Используйте четкие формулировки",
    "Выделяйте ключевые навыки",
    "Добавляйте только релевантный опыт работы",
    "Проверяйте орфографию и пунктуацию"
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Конструктор резюме</PanelHeader>
      
      <Group>
        <Div>
          <Button 
            stretched 
            size="l" 
            mode="primary" 
            onClick={() => routeNavigator.push('template-select')}
          >
            Создать новое резюме
          </Button>
        </Div>
        <Div>
          <Button 
            stretched 
            size="l" 
            mode="secondary" 
            onClick={() => routeNavigator.push('my-resumes')}
          >
            Мои резюме
          </Button>
        </Div>
      </Group>

      <Group header={<Header>Рекомендации по созданию резюме</Header>}>
        <CardGrid size="l">
          {recommendations.map((item, index) => (
            <Card key={index} style={{ padding: '16px' }}>
              <SimpleCell>
                <Text>{item}</Text>
              </SimpleCell>
            </Card>
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};