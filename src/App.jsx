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
            src="https://github.com/urfdvw/urfdvw.github.io/blob/main/src/images/email.png?raw=true"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title={<Typography variant="h6" gutterBottom>
          Email: urfdvw@gmail.com
        </Typography>}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Github"
            src="https://github.com/urfdvw/urfdvw.github.io/blob/main/src/images/github.png?raw=true"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title={<Typography variant="h6" gutterBottom>
          Github: urfdvw
        </Typography>}
        onClick={() => window.open("https://github.com/urfdvw", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Mastodon"
            src="https://github.com/urfdvw/urfdvw.github.io/blob/main/src/images/mastodon.png?raw=true"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title={<Typography variant="h6" gutterBottom>
          Mastodon: @Riverwang@fosstodon.org
        </Typography>}
        onClick={() => window.open("https://fosstodon.org/@Riverwang", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Youtube"
            src="https://github.com/urfdvw/urfdvw.github.io/blob/main/src/images/youtube.png?raw=true"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title={<Typography variant="h6" gutterBottom>
          Youtube: @Riverwang
        </Typography>}
        onClick={() => window.open("https://www.youtube.com/channel/UCeunCRTBkjHWynMl4I4le_A", "_blank")}
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Twitter"
            src="https://github.com/urfdvw/urfdvw.github.io/blob/main/src/images/twitter.png?raw=true"
            sx={{ width: 20, height: 20 }}
            variant="rounded"
          />
        }
        title={<Typography variant="h6" gutterBottom>
          Twitter: @River___Wang
        </Typography>}
        onClick={() => window.open("https://twitter.com/River___Wang", "_blank")}
      />
      <br />
      <Divider />
      <Typography variant="h5" gutterBottom>
        About CircuitPython Online IDE
      </Typography>
      <p>
        If the short link (<a href='https://circuitpy.online'>https://circuitpy.online</a>) is not functioning on your network,
        consider using the long link (<a href='https://urfdvw.github.io/circuitpython-online-ide-2/'>https://urfdvw.github.io/circuitpython-online-ide-2/</a>) instead.
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
