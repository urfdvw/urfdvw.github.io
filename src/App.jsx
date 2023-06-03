import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Divider from '@mui/material/Divider';

function App() {

  return (
    <>
      <Typography variant="h4" gutterBottom>
        River Wang
      </Typography>
      <Avatar
        alt="River Wang"
        src="https://yt3.ggpht.com/rpaCH5oLjwb8MkP4WPBJWIbOX_AQRC-v7IdXykhdsYQYuF5atWGPCROLg6GeeViWHijhwCQy=s600-c-k-c0x00ffffff-no-rj-rp-mo"
        sx={{ width: 200, height: 200 }}
        variant="rounded"
      />
      <br />
      <Divider />
      <Typography variant="h5" gutterBottom>
        Follow Me!
      </Typography>
      <CardHeader
        avatar={
          <Avatar
            alt="Email"
            src="./src/images/email.png"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title="Email: urfdvw@gmail.com"
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Github"
            src="./src/images/github.png"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title="Github: urfdvw"
        onClick={() => window.open("https://github.com/urfdvw", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Mastodon"
            src="./src/images/mastodon.png"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title="Mastodon: @Riverwang@fosstodon.org"
        onClick={() => window.open("https://fosstodon.org/@Riverwang", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Youtube"
            src="./src/images/youtube.png"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title="Youtube: @Riverwang"
        onClick={() => window.open("https://www.youtube.com/channel/UCeunCRTBkjHWynMl4I4le_A", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Twitter"
            src="./src/images/twitter.png"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title="Twitter: @River___Wang"
        onClick={() => window.open("https://twitter.com/River___Wang", "_blank")}
      />
      <br />
      <Divider />
      <Typography variant="h5" gutterBottom>
        About CircuitPython Online IDE
      </Typography>
      <p>
        If the short link (<a href='https://circuitpy.online'>https://circuitpy.online</a>) is not functioning on your network,
        consider using the long link (<a href='https://urfdvw.github.io/CircuitPython-online-IDE/'>https://urfdvw.github.io/CircuitPython-online-IDE/</a>) instead.
        The short link simply serves as a portal to the long link.
        If your firewall is blocking the short link,
        it is blocking the redirection service,
        not the Integrated Development Environment (IDE).
        The long link, which is the actual connection to the IDE,
        should be consistently operational.
      </p>
    </>
  )
}

export default App
