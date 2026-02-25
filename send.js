import { Resend } from 'resend';

const resend = new Resend('re_4q1Hyo14_EYa7h9yKj5WVrYXUEL1u7iPZ');

export default async function (req, res) {
  const { email } = JSON.parse(req.body);

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'テスト成功',
    html: '<strong>おめでとう！バックエンド処理大成功だよ！</strong>'
  });

  res.status(200).json({ success: true });
}