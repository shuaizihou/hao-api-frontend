import {ProCard, ProDescriptions} from '@ant-design/pro-components';
import {
  getLoginUserUsingGet,
  updateUserUsingPost,
} from '@/services/api-backend/userController';
import {values} from 'lodash';
import {Button} from 'antd';
export const HaoAPI_CLIENT_SDK = "https://github.com/shuaizihou/hao-api-backend/tree/master/hao-api-client-sdk"

/**
 * 个人中心
 * @constructor
 */
const UserInfo: React.FC = () => {
  return (
    <ProCard
      bordered
      headerBordered
      direction="column"
      gutter={[0, 16]}
      style={{ marginBlockStart: 8 }}
    >
      <ProCard title="个人信息" type="inner" bordered>
        <ProDescriptions
          column={1}
          request={async () => {
            const res = await getLoginUserUsingGet({
              ...values(),
            });
            if (res?.data) {
              return {
                data: res?.data || '',
                success: true,
                total: res.data,
              };
            } else {
              return {
                data: '',
                success: false,
                total: 0,
              };
            }
          }}
          emptyText={'空'}
          editable={{
            // 编辑框修改后点击 ✔ 保存用户昵称
            onSave: async (keypath, newInfo, oriInfo) => {
              console.log(keypath, newInfo, oriInfo);
              const res = await updateUserUsingPost(newInfo as API.UserUpdateRequest);
              console.log(res.data);
              if (res?.data) {
                return {
                  data: res?.data || '',
                  success: true,
                  total: res.data,
                };
              } else {
                return {
                  data: '',
                  success: false,
                  total: 0,
                };
              }
              return true;
            },
          }}
          columns={[
            {
              title: '头像',
              dataIndex: 'userAvatar',
              valueType: 'image',
              hideInSearch: true,
              // render: (_, record) => (
              //   <div>
              //     <Image src={record.userAvatar} width={50}/>
              //   </div>
              // )
              editable: false,
            },
            {
              title: '用户名',
              dataIndex: 'userName',
              copyable: true,
            },
            {
              title: '角色',
              dataIndex: 'userRole',
              valueType: 'select',
              valueEnum: {
                user: { text: '普通用户', status: 'Default' },
                admin: { text: '管理员', status: 'Success' }
              },
              editable: false,
            },
            {
              title: '创建时间',
              dataIndex: 'createTime',
              valueType: 'dateTime',
              hideInForm: true,
              editable: false,
            },
          ]}
        ></ProDescriptions>
      </ProCard>
      <ProCard>
        <ProDescriptions
          column={1}
          request={async () => {
            const res = await getLoginUserUsingGet({
              ...values(),
            });
            if (res?.data) {
              return {
                data: res?.data || '',
                success: true,
                total: res.data,
              };
            } else {
              return {
                data: '',
                success: false,
                total: 0,
              };
            }
          }}
          emptyText={'空'}
          columns={[
            {
              title: 'AccessKey',
              dataIndex: 'accessKey',
              copyable: true,
            },
            {
              title: 'SecretKey',
              dataIndex: 'secretKey',
              copyable: true,
            },
          ]}
        ></ProDescriptions>
      </ProCard>
      <ProCard title="开发者 SDK（快速调用接口）" type="inner" bordered>
        <Button type="primary" href={HaoAPI_CLIENT_SDK} target='_blank'>
          导入 Java SDK
        </Button>
      </ProCard>
    </ProCard>
  );
};

export default UserInfo;
