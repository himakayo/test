import { Resend } from 'resend';

// 暗号そのものじゃなくて、Vercelで設定した「名前」を書くんだよ！
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (req, res) {
  try {
    const { email } = JSON.parse(req.body);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email, 
      subject: 'テスト成功',
      html: '<strong>おめでとう！バックエンド処理大成功だよ！</strong>'
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
