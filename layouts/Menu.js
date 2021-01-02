import { Menu } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  MenuUnfoldOutlined,
  DribbbleOutlined,
  PieChartOutlined,
  FundOutlined,
  HighlightOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const keys = [
  '/',
  '/sculptures',
  '/makers',
  '/users',
  '/recent-activity',
  '/users/tom',
  '/users/bill',
  '/users/alex',
];

const menu = [
  <Menu.Item key={keys[0]}>
    <Link href={keys[0]}>
      <a>
        <HighlightOutlined />
        <span>Dashboard</span>
      </a>
    </Link>
  </Menu.Item>,
  <SubMenu key={keys[5]} icon={<UserOutlined />} title="User">
    <Menu.Item key={keys[5]}>
      <Link href={keys[5]}>
        <a>
          <span>Tom</span>
        </a>
      </Link>
    </Menu.Item>
    <Menu.Item key={keys[6]}>
      <Link href={keys[6]}>
        <a>
          <span>Bill</span>
        </a>
      </Link>
    </Menu.Item>
    <Menu.Item key={keys[7]}>
      <Link href={keys[7]}>
        <a>
          <span>Alex</span>
        </a>
      </Link>
    </Menu.Item>
  </SubMenu>,
  <Menu.Item key={keys[1]}>
    <Link href={keys[1]}>
      <a>
        <PieChartOutlined />
        <span>Sculptures</span>
      </a>
    </Link>
  </Menu.Item>,
  <Menu.Item key={keys[2]}>
    <Link href={keys[2]}>
      <a>
        <FundOutlined />
        <span>Makers</span>
      </a>
    </Link>
  </Menu.Item>,
  <Menu.Item key={keys[4]}>
    <Link href={keys[4]}>
      <a>
        <DribbbleOutlined />
        <span>Recent Activity</span>
      </a>
    </Link>
  </Menu.Item>,
];

export default ({ style, closeDrawer }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  let selectedKeys = [];

  for (let i = keys.length - 1; i >= 0; i--) {
    if (currentPath.includes(keys[i])) {
      selectedKeys = [keys[i]];
      break;
    }
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      style={{ ...style, padding: '16px 0' }}
      onClick={({ key }) => {
        closeDrawer();
        router.push(key);
      }}
    >
      {menu}
    </Menu>
  );
};
